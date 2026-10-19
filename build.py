"""data.py 의 상품 데이터를 kiosk-tablet.html 에 넣는 빌드 스크립트.

사용법:  python3 build.py
  1) data.py 를 검사합니다 (필드 누락, id/매대 중복, 언어 누락, 가격 오류 등)
  2) 문제가 없으면 kiosk-tablet.html 의 /*DATA*/ ... /*END_DATA*/ 사이를 새 데이터로 바꿉니다.
"""
import json
import re
import sys
from pathlib import Path

from data import POPULAR, PRODUCTS

HERE = Path(__file__).parent
JS_TARGET = HERE / "app.js"
REQ = ["id", "zone", "emoji", "cat", "season", "tag", "region", "name_ko", "spec", "weight",
       "price", "orig", "stock", "origin", "origin_detail", "desc", "fresh", "in_at", "tags", "keywords"]
CATS = {"farm", "sea", "meat", "daily", "grocery"}


def validate():
    errs, ids, zones = [], set(), set()
    for i, p in enumerate(PRODUCTS):
        miss = [k for k in REQ if k not in p]
        if miss:
            errs.append(f"{i}번째 상품: 누락 필드 {miss}")
            continue
        if p["id"] in ids:
            errs.append(f"id 중복: {p['id']}")
        if p["zone"] in zones:
            errs.append(f"매대 중복: {p['zone']}")
        ids.add(p["id"])
        zones.add(p["zone"])
        if not re.fullmatch(r"[A-F]-(0[1-9]|10)", p["zone"]):
            errs.append(f"{p['id']}: 매대 형식 오류 {p['zone']} (예: A-01 ~ D-10, E-01 ~ F-05)")
        elif p["zone"][0] in "EF" and int(p["zone"][2:]) > 5:
            errs.append(f"{p['id']}: 1F(E·F) 매대는 01~05만 있습니다")
        if p["cat"] not in CATS:
            errs.append(f"{p['id']}: cat 값 오류 {p['cat']} → {sorted(CATS)} 중 하나")
        for k in ("tag", "region"):
            if set(p[k]) != {"ko", "en", "zh", "ja"}:
                errs.append(f"{p['id']}: {k} 에 ko/en/zh/ja 4개 언어가 필요합니다")
        if p["price"] > p["orig"]:
            errs.append(f"{p['id']}: 판매가가 정상가보다 큽니다")
    for pid in POPULAR:
        if pid not in ids:
            errs.append(f"POPULAR 에 없는 id: {pid}")
    return errs


def main():
    errs = validate()
    if errs:
        print("데이터 오류:\n  " + "\n  ".join(errs))
        sys.exit(1)
    payload = json.dumps({"products": PRODUCTS, "popular": POPULAR}, ensure_ascii=False, separators=(",", ":"))
    js_code = JS_TARGET.read_text(encoding="utf-8")
    new, n = re.subn(r"/\*DATA\*/.*?/\*END_DATA\*/", lambda m: f"/*DATA*/{payload}/*END_DATA*/", js_code, flags=re.S)
    if n != 1:
        print("app.js 에서 /*DATA*/ ... /*END_DATA*/ 위치를 찾지 못했습니다.")
        sys.exit(1)
    JS_TARGET.write_text(new, encoding="utf-8")
    season = sum(1 for p in PRODUCTS if p["season"])
    print(f"완료: 상품 {len(PRODUCTS)}종 (10월 제철 {season} · 상시 식재료 {len(PRODUCTS) - season}) → {JS_TARGET.name}")


if __name__ == "__main__":
    main()
