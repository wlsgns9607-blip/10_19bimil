/* ---------- 데이터 ---------- */
const DB=/*DATA*/{"products":[{"id":"apple","zone":"A-01","emoji":"🍎","cat":"farm","season":true,"tag":{"ko":"사과","en":"Apple","zh":"苹果","ja":"りんご"},"region":{"ko":"경북 영주","en":"Yeongju","zh":"荣州","ja":"栄州"},"name_ko":"영주 소백산 꿀사과","spec":"1봉 / 5~7입, 1.5kg","weight":"1.5kg","price":15900,"orig":19900,"stock":38,"origin":"경북 영주 소백산 사과작목반 김태호 농부","origin_detail":"이마트 7년 계약재배 산지직송 (수확 3일차)","desc":"일교차가 큰 소백산 자락에서 자라 당도가 높고 과육이 단단합니다. 10월 중순부터 부사 수확이 시작됩니다.","fresh":4.9,"in_at":"오늘 05:00","tags":["10월제철","GAP우수관리인증","비파괴당도선별"],"keywords":"사과 apple 부사 홍로 과일"},{"id":"pear","zone":"A-02","emoji":"🍐","cat":"farm","season":true,"tag":{"ko":"배","en":"Pear","zh":"梨","ja":"梨"},"region":{"ko":"전남 나주","en":"Naju","zh":"罗州","ja":"羅州"},"name_ko":"나주 신고배","spec":"1박스 / 4~5입, 3kg","weight":"3kg","price":19900,"orig":24900,"stock":26,"origin":"전남 나주 영산강 배작목반 정은숙 농부","origin_detail":"이마트 산지직송 (수확 4일차)","desc":"영산강 유역의 비옥한 토양에서 자란 신고배로, 9월 말~10월에 수확해 과즙이 풍부하고 아삭합니다.","fresh":4.8,"in_at":"오늘 05:10","tags":["10월제철","GAP우수관리인증","명절선물용"],"keywords":"배 pear 신고 과일"},{"id":"persimmon","zone":"A-03","emoji":"🟠","cat":"farm","season":true,"tag":{"ko":"단감","en":"Sweet Persimmon","zh":"甜柿","ja":"甘柿"},"region":{"ko":"경남 김해 진영","en":"Gimhae","zh":"金海","ja":"金海"},"name_ko":"진영 단감","spec":"1봉 / 6~8입, 1.5kg","weight":"1.5kg","price":9900,"orig":12900,"stock":44,"origin":"경남 김해 진영 단감작목반 박상규 농부","origin_detail":"이마트 계약재배 (수확 2일차)","desc":"단감 재배의 오랜 역사를 가진 진영에서 10월 수확 적기에 딴 단감으로, 아삭하고 단맛이 진합니다.","fresh":4.8,"in_at":"오늘 05:20","tags":["10월제철","GAP우수관리인증"],"keywords":"단감 감 persimmon 과일"},{"id":"jujube","zone":"A-04","emoji":"🟤","cat":"farm","season":true,"tag":{"ko":"생대추","en":"Jujube","zh":"鲜枣","ja":"なつめ"},"region":{"ko":"충북 보은","en":"Boeun","zh":"报恩","ja":"報恩"},"name_ko":"보은 햇 생대추","spec":"1팩 / 500g","weight":"500g","price":7900,"orig":9900,"stock":21,"origin":"충북 보은 속리산 대추작목반 이영자 농부","origin_detail":"이마트 산지직송 (수확 1일차)","desc":"9월 말~10월에 수확하는 생대추로, 사과처럼 아삭하고 달아 생으로 먹기 좋습니다.","fresh":4.9,"in_at":"오늘 04:50","tags":["10월제철","친환경무농약"],"keywords":"대추 생대추 jujube 과일"},{"id":"chestnut","zone":"A-05","emoji":"🌰","cat":"farm","season":true,"tag":{"ko":"햇밤","en":"Chestnut","zh":"栗子","ja":"栗"},"region":{"ko":"충남 공주","en":"Gongju","zh":"公州","ja":"公州"},"name_ko":"공주 정안 햇밤","spec":"1봉 / 1kg","weight":"1kg","price":7980,"orig":9980,"stock":52,"origin":"충남 공주 정안 밤작목반 최병수 농부","origin_detail":"이마트 9년 계약재배 (수확 3일차)","desc":"9~10월에 수확한 햇밤으로 알이 굵고 단맛이 진해 군밤·찐밤으로 좋습니다.","fresh":4.7,"in_at":"오늘 05:00","tags":["10월제철","GAP우수관리인증"],"keywords":"밤 chestnut 군밤 견과"},{"id":"sweetpotato","zone":"A-06","emoji":"🍠","cat":"farm","season":true,"tag":{"ko":"밤고구마","en":"Sweet Potato","zh":"红薯","ja":"さつまいも"},"region":{"ko":"전남 해남","en":"Haenam","zh":"海南","ja":"海南"},"name_ko":"해남 황토 밤고구마","spec":"1봉 / 1.5kg","weight":"1.5kg","price":6980,"orig":8980,"stock":47,"origin":"전남 해남 황토고구마작목반 윤기철 농부","origin_detail":"이마트 계약재배 (수확 후 7일 숙성)","desc":"해남 황토에서 자라 포슬포슬한 밤맛이 특징이며, 9~10월 수확 후 숙성해 단맛을 끌어올렸습니다.","fresh":4.8,"in_at":"오늘 05:30","tags":["10월제철","황토재배","GAP우수관리인증"],"keywords":"고구마 sweet potato 밤고구마"},{"id":"matsutake","zone":"A-07","emoji":"🍄","cat":"farm","season":true,"tag":{"ko":"송이버섯","en":"Pine Mushroom","zh":"松茸","ja":"松茸"},"region":{"ko":"강원 양양","en":"Yangyang","zh":"襄阳","ja":"襄陽"},"name_ko":"양양 자연산 송이","spec":"1팩 / 100g (3등급)","weight":"100g","price":42000,"orig":49000,"stock":8,"origin":"강원 양양 산림조합 송이 채취 농가","origin_detail":"산림조합 공판 경매 낙찰품 (채취 1일차)","desc":"소나무 숲에서 자연 채취한 송이로, 9월 중순~10월 초가 채취 절정입니다. 결대로 찢어 향을 즐기세요.","fresh":5,"in_at":"오늘 06:00","tags":["10월제철","자연산","산림조합공판"],"keywords":"송이 버섯 mushroom matsutake"},{"id":"pinenut","zone":"A-08","emoji":"🌲","cat":"farm","season":true,"tag":{"ko":"햇잣","en":"Pine Nuts","zh":"松子","ja":"松の実"},"region":{"ko":"경기 가평","en":"Gapyeong","zh":"加平","ja":"加平"},"name_ko":"가평 햇잣 (백잣)","spec":"1봉 / 200g","weight":"200g","price":24800,"orig":29800,"stock":19,"origin":"경기 가평 축령산 잣영농조합 한정민 농부","origin_detail":"이마트 산지직송 (가공 5일차)","desc":"잣나무 숲에서 9~10월에 수확한 햇잣으로, 고소하고 기름진 맛이 일품입니다.","fresh":4.8,"in_at":"오늘 05:40","tags":["10월제철","국내산100%"],"keywords":"잣 pine nut 견과"},{"id":"taro","zone":"A-09","emoji":"🥔","cat":"farm","season":true,"tag":{"ko":"토란","en":"Taro","zh":"芋头","ja":"里芋"},"region":{"ko":"전남 곡성","en":"Gokseong","zh":"谷城","ja":"谷城"},"name_ko":"곡성 깐토란","spec":"1팩 / 500g","weight":"500g","price":5480,"orig":6980,"stock":33,"origin":"전남 곡성 섬진강 토란작목반 조순희 농부","origin_detail":"이마트 직거래 (수확 2일차)","desc":"섬진강 유역에서 9~10월에 수확한 토란으로 아린 맛이 적고 부드러워 토란국에 좋습니다.","fresh":4.7,"in_at":"오늘 05:10","tags":["10월제철","손질완료"],"keywords":"토란 taro 토란국"},{"id":"ginger","zone":"A-10","emoji":"🫚","cat":"farm","season":true,"tag":{"ko":"햇생강","en":"Ginger","zh":"生姜","ja":"生姜"},"region":{"ko":"전북 완주 봉동","en":"Wanju","zh":"完州","ja":"完州"},"name_ko":"봉동 햇생강","spec":"1봉 / 500g","weight":"500g","price":4780,"orig":5980,"stock":29,"origin":"전북 완주 봉동 생강작목반 송재민 농부","origin_detail":"이마트 계약재배 (수확 2일차)","desc":"오래된 생강 재배지인 봉동에서 10월에 수확한 햇생강으로 향과 매운맛이 진합니다. 생강청 담그기 좋은 시기입니다.","fresh":4.7,"in_at":"오늘 05:00","tags":["10월제철","GAP우수관리인증"],"keywords":"생강 ginger 생강청"},{"id":"shrimp","zone":"B-01","emoji":"🦐","cat":"sea","season":true,"tag":{"ko":"대하","en":"King Prawn","zh":"大虾","ja":"大正エビ"},"region":{"ko":"충남 홍성 남당리","en":"Hongseong","zh":"洪城","ja":"洪城"},"name_ko":"홍성 남당리 대하","spec":"1팩 / 500g (15~20미)","weight":"500g","price":19900,"orig":24900,"stock":17,"origin":"충남 홍성 남당항 어촌계 김광석 선주","origin_detail":"남당항 위판장 직매입 (당일 입하)","desc":"천수만 대하는 가을에 살이 올라 9~10월이 제철입니다. 굵은소금 위에 구우면 단맛이 살아납니다.","fresh":4.9,"in_at":"오늘 04:30","tags":["10월제철","당일입하","이력추적"],"keywords":"대하 새우 shrimp prawn 소금구이"},{"id":"gizzard","zone":"B-02","emoji":"🐟","cat":"sea","season":true,"tag":{"ko":"전어","en":"Gizzard Shad","zh":"斑鰶","ja":"コノシロ"},"region":{"ko":"충남 보령","en":"Boryeong","zh":"保宁","ja":"保寧"},"name_ko":"보령 무창포 전어","spec":"1팩 / 1kg (10~14미)","weight":"1kg","price":12900,"orig":15900,"stock":24,"origin":"충남 보령 무창포 어촌계","origin_detail":"보령 위판장 직매입 (당일 입하)","desc":"가을 전어는 기름이 올라 고소함이 가장 진할 때입니다. 구이와 회무침으로 즐겨 보세요.","fresh":4.8,"in_at":"오늘 04:20","tags":["10월제철","당일입하"],"keywords":"전어 gizzard shad 구이 회무침"},{"id":"crab","zone":"B-03","emoji":"🦀","cat":"sea","season":true,"tag":{"ko":"꽃게","en":"Blue Crab","zh":"梭子蟹","ja":"ワタリガニ"},"region":{"ko":"인천 연평도","en":"Yeonpyeong","zh":"延坪岛","ja":"延坪島"},"name_ko":"연평도 수꽃게","spec":"1팩 / 1kg (3~4미)","weight":"1kg","price":24800,"orig":29800,"stock":15,"origin":"인천 옹진 연평도 어촌계 박영길 선주","origin_detail":"인천 위판장 직매입 (당일 입하)","desc":"가을에는 수꽃게가 살이 꽉 차는 제철입니다. 찜이나 꽃게탕으로 드시면 좋습니다.","fresh":4.8,"in_at":"오늘 04:10","tags":["10월제철","활꽃게","이력추적"],"keywords":"꽃게 게 crab 꽃게탕"},{"id":"octopus","zone":"B-04","emoji":"🐙","cat":"sea","season":true,"tag":{"ko":"낙지","en":"Small Octopus","zh":"章鱼","ja":"テナガダコ"},"region":{"ko":"전남 무안","en":"Muan","zh":"务安","ja":"務安"},"name_ko":"무안 갯벌 뻘낙지","spec":"1팩 / 3미","weight":"3미","price":21900,"orig":26900,"stock":12,"origin":"전남 무안 탄도만 어촌계 정동수 어민","origin_detail":"무안 산지 직매입 (당일 입하)","desc":"무안 갯벌에서 잡은 뻘낙지로, 가을 낙지는 힘이 좋고 식감이 쫄깃합니다. 연포탕이나 볶음으로 추천합니다.","fresh":4.9,"in_at":"오늘 04:40","tags":["10월제철","활낙지","갯벌산"],"keywords":"낙지 octopus 연포탕 탕탕이"},{"id":"spanishmackerel","zone":"B-05","emoji":"🐟","cat":"sea","season":true,"tag":{"ko":"삼치","en":"Spanish Mackerel","zh":"鲅鱼","ja":"サワラ"},"region":{"ko":"전남 여수 거문도","en":"Yeosu","zh":"丽水","ja":"麗水"},"name_ko":"거문도 삼치 (대)","spec":"1마리 / 1.2kg 내외","weight":"1.2kg","price":12900,"orig":15900,"stock":18,"origin":"전남 여수 거문도 삼치잡이 선단","origin_detail":"여수 위판장 직매입 (당일 입하)","desc":"삼치는 10월부터 기름기가 오르기 시작해 담백하면서도 고소한 맛이 좋습니다.","fresh":4.7,"in_at":"오늘 04:00","tags":["10월제철","당일입하"],"keywords":"삼치 spanish mackerel 구이"},{"id":"mackerel","zone":"B-06","emoji":"🐟","cat":"sea","season":true,"tag":{"ko":"고등어","en":"Mackerel","zh":"鲭鱼","ja":"サバ"},"region":{"ko":"부산","en":"Busan","zh":"釜山","ja":"釜山"},"name_ko":"부산 국산 생고등어","spec":"1팩 / 2마리","weight":"2미","price":5980,"orig":7980,"stock":40,"origin":"부산공동어시장 대형선망 선단","origin_detail":"부산공동어시장 직매입 (당일 입하)","desc":"가을부터 겨울까지 기름기가 풍부해지는 국산 고등어로, 구이·조림 모두 잘 어울립니다.","fresh":4.6,"in_at":"오늘 03:50","tags":["10월제철","국산","손질가능"],"keywords":"고등어 mackerel 구이 조림"},{"id":"rockfish","zone":"B-07","emoji":"🐠","cat":"sea","season":true,"tag":{"ko":"우럭","en":"Rockfish","zh":"许氏平鲉","ja":"クロソイ"},"region":{"ko":"충남 태안","en":"Taean","zh":"泰安","ja":"泰安"},"name_ko":"태안 활우럭","spec":"1마리 / 700g 내외","weight":"700g","price":14900,"orig":17900,"stock":14,"origin":"충남 태안 가두리 양식 어가 이민호 대표","origin_detail":"태안 산지 직매입 (활어 입하)","desc":"가을 우럭은 살이 단단하고 담백해 회나 매운탕 모두 좋습니다. 요청 시 손질해 드립니다.","fresh":4.7,"in_at":"오늘 04:30","tags":["10월제철","활어","손질가능"],"keywords":"우럭 rockfish 매운탕 회"},{"id":"anchovy","zone":"B-08","emoji":"🐟","cat":"sea","season":true,"tag":{"ko":"죽방멸치","en":"Anchovy","zh":"鳀鱼","ja":"カタクチイワシ"},"region":{"ko":"경남 남해","en":"Namhae","zh":"南海","ja":"南海"},"name_ko":"남해 지족 죽방멸치","spec":"1팩 / 200g (중멸)","weight":"200g","price":16800,"orig":19800,"stock":22,"origin":"경남 남해 지족해협 죽방렴 어가","origin_detail":"남해 산지 직매입 (건조 3일차)","desc":"물살 빠른 지족해협 죽방렴으로 잡아 비늘 손상이 적고 맛이 깔끔합니다. 멸치는 해양수산부 10월 이달의 수산물입니다.","fresh":4.9,"in_at":"오늘 05:00","tags":["10월제철","이달의수산물","전통어법"],"keywords":"멸치 죽방멸치 anchovy 볶음"},{"id":"hanwoosteak","zone":"B-09","emoji":"🥩","cat":"meat","season":true,"tag":{"ko":"한우 꽃등심","en":"Hanwoo Ribeye","zh":"韩牛肋眼","ja":"韓牛リブロース"},"region":{"ko":"강원 횡성","en":"Hoengseong","zh":"横城","ja":"横城"},"name_ko":"횡성 한우 1++등급 꽃등심","spec":"구이용 / 300g","weight":"300g","price":34800,"orig":42000,"stock":18,"origin":"강원 횡성 한우 협력 농가","origin_detail":"1++등급 No.9 · 저온 숙성 (당일 가공)","desc":"최상급 마블링의 1++등급 한우 꽃등심입니다. 깊은 풍미와 부드러운 육즙으로 가을 나들이 및 구이용으로 최고입니다.","fresh":4.9,"in_at":"오늘 06:00","tags":["10월제철","한우1++","산지직송"],"keywords":"꽃등심 등심 한우 소고기 beef steak 구이 스테이크 정육"},{"id":"redcrab","zone":"B-10","emoji":"🦀","cat":"sea","season":true,"tag":{"ko":"홍게","en":"Red Snow Crab","zh":"红雪蟹","ja":"ベニズワイガニ"},"region":{"ko":"경북 울진","en":"Uljin","zh":"蔚珍","ja":"蔚珍"},"name_ko":"울진 홍게","spec":"1팩 / 2마리 (자숙)","weight":"2미","price":11900,"orig":15900,"stock":16,"origin":"경북 울진 후포항 홍게잡이 선단","origin_detail":"후포 위판장 직매입 (당일 자숙)","desc":"여름 금어기가 끝난 뒤 10월부터 살이 차오르기 시작하며, 겨울보다 가격 부담이 적습니다.","fresh":4.6,"in_at":"오늘 04:20","tags":["10월제철","당일자숙"],"keywords":"홍게 대게 게 crab"},{"id":"scallion","zone":"C-01","emoji":"🌱","cat":"farm","season":false,"tag":{"ko":"대파","en":"Green Onion","zh":"大葱","ja":"長ねぎ"},"region":{"ko":"전남 진도","en":"Jindo","zh":"珍岛","ja":"珍島"},"name_ko":"진도 해풍 대파","spec":"1단 / 1kg 내외","weight":"1kg","price":2980,"orig":3480,"stock":57,"origin":"전남 진도 해풍대파 작목반","origin_detail":"이마트 계약재배 (수확 2일차)","desc":"바닷바람을 맞고 자라 흰 줄기가 굵고 단맛이 납니다. 국물·볶음 어디에나 빠지지 않는 기본 채소입니다.","fresh":4.6,"in_at":"오늘 05:20","tags":["GAP우수관리인증","국내산"],"keywords":"대파 파 쪽파 실파 scallion green onion leek 국거리 파채"},{"id":"onion","zone":"C-02","emoji":"🧅","cat":"farm","season":false,"tag":{"ko":"양파","en":"Onion","zh":"洋葱","ja":"玉ねぎ"},"region":{"ko":"전남 무안","en":"Muan","zh":"务安","ja":"務安"},"name_ko":"무안 황토 양파","spec":"1망 / 1.5kg","weight":"1.5kg","price":3980,"orig":4980,"stock":64,"origin":"전남 무안 황토양파 작목반","origin_detail":"저온저장 출하 (선별 1일차)","desc":"황토밭에서 자라 단단하고 매운맛 뒤에 단맛이 올라옵니다. 볶음·카레·장아찌에 두루 쓰입니다.","fresh":4.6,"in_at":"오늘 05:00","tags":["국내산","저온저장"],"keywords":"양파 onion 적양파 볶음 카레 장아찌"},{"id":"garlic","zone":"C-03","emoji":"🧄","cat":"farm","season":false,"tag":{"ko":"깐마늘","en":"Peeled Garlic","zh":"去皮大蒜","ja":"むきにんにく"},"region":{"ko":"경북 의성","en":"Uiseong","zh":"义城","ja":"義城"},"name_ko":"의성 깐마늘","spec":"1봉 / 500g","weight":"500g","price":6980,"orig":8480,"stock":41,"origin":"경북 의성 마늘작목반","origin_detail":"이마트 6년 계약재배 (손질 1일차)","desc":"의성 마늘은 알이 단단하고 매운맛과 단맛의 균형이 좋습니다. 한식 양념의 기본입니다.","fresh":4.8,"in_at":"오늘 05:30","tags":["GAP우수관리인증","손질완료"],"keywords":"마늘 깐마늘 다진마늘 통마늘 garlic 양념"},{"id":"potato","zone":"C-04","emoji":"🥔","cat":"farm","season":false,"tag":{"ko":"감자","en":"Potato","zh":"土豆","ja":"じゃがいも"},"region":{"ko":"강원 평창","en":"Pyeongchang","zh":"平昌","ja":"平昌"},"name_ko":"평창 고랭지 감자","spec":"1봉 / 2kg","weight":"2kg","price":5980,"orig":7480,"stock":35,"origin":"강원 평창 고랭지 감자작목반","origin_detail":"이마트 계약재배 (수확 3일차)","desc":"서늘한 고랭지에서 자라 분이 많고 포슬포슬합니다. 조림·볶음·감자탕에 잘 어울립니다.","fresh":4.7,"in_at":"오늘 05:10","tags":["GAP우수관리인증","국내산"],"keywords":"감자 potato 감자조림 감자볶음 감자탕 수미"},{"id":"zucchini","zone":"C-05","emoji":"🥒","cat":"farm","season":false,"tag":{"ko":"애호박","en":"Korean Zucchini","zh":"西葫芦","ja":"韓国かぼちゃ"},"region":{"ko":"강원 화천","en":"Hwacheon","zh":"华川","ja":"華川"},"name_ko":"화천 애호박","spec":"1입 / 300g 내외","weight":"300g","price":1480,"orig":1980,"stock":48,"origin":"강원 화천 애호박 작목반","origin_detail":"이마트 직거래 (수확 1일차)","desc":"껍질이 얇고 속이 연해 된장찌개·호박전·나물에 두루 쓰이는 한식 기본 채소입니다.","fresh":4.6,"in_at":"오늘 05:00","tags":["국내산","인큐애호박"],"keywords":"애호박 호박 zucchini squash 된장찌개 호박전"},{"id":"radish","zone":"C-06","emoji":"🥕","cat":"farm","season":false,"tag":{"ko":"무","en":"Radish","zh":"萝卜","ja":"大根"},"region":{"ko":"강원 강릉","en":"Gangneung","zh":"江陵","ja":"江陵"},"name_ko":"강릉 고랭지 무","spec":"1개 / 1.5kg 내외","weight":"1.5kg","price":1980,"orig":2480,"stock":39,"origin":"강원 강릉 고랭지 무 작목반","origin_detail":"이마트 계약재배 (수확 2일차)","desc":"고랭지에서 자라 단단하고 시원한 단맛이 납니다. 무국·깍두기·무생채에 좋습니다.","fresh":4.6,"in_at":"오늘 05:10","tags":["국내산","고랭지재배"],"keywords":"무 radish daikon 무국 깍두기 무생채 총각무 동치미"},{"id":"napacabbage","zone":"C-07","emoji":"🥬","cat":"farm","season":false,"tag":{"ko":"배추","en":"Napa Cabbage","zh":"白菜","ja":"白菜"},"region":{"ko":"강원 태백","en":"Taebaek","zh":"太白","ja":"太白"},"name_ko":"태백 고랭지 배추","spec":"1포기 / 2.5kg 내외","weight":"2.5kg","price":3980,"orig":4980,"stock":30,"origin":"강원 태백 매봉산 고랭지 배추 농가","origin_detail":"이마트 계약재배 (수확 2일차)","desc":"속이 노랗게 꽉 차고 아삭합니다. 겉절이·배춧국·쌈으로 즐기고 김장철을 앞두고 수요가 많습니다.","fresh":4.7,"in_at":"오늘 05:00","tags":["국내산","고랭지재배"],"keywords":"배추 알배추 napa cabbage 김장 겉절이 배춧국 쌈"},{"id":"beansprout","zone":"C-08","emoji":"🌱","cat":"farm","season":false,"tag":{"ko":"콩나물","en":"Bean Sprouts","zh":"豆芽","ja":"豆もやし"},"region":{"ko":"경기","en":"Gyeonggi","zh":"京畿","ja":"京畿"},"name_ko":"국산콩 콩나물","spec":"1봉 / 300g","weight":"300g","price":1280,"orig":1580,"stock":72,"origin":"경기 국산콩 콩나물 재배농가","origin_detail":"오늘 아침 재배분 입고","desc":"국산콩으로 키워 머리가 통통하고 아삭합니다. 콩나물국·무침·비빔밥의 단골 재료입니다.","fresh":4.5,"in_at":"오늘 04:50","tags":["국산콩100%","무농약재배"],"keywords":"콩나물 숙주 숙주나물 bean sprout 콩나물국 무침 비빔밥"},{"id":"spinach","zone":"C-09","emoji":"🥬","cat":"farm","season":false,"tag":{"ko":"시금치","en":"Spinach","zh":"菠菜","ja":"ほうれん草"},"region":{"ko":"경남 남해","en":"Namhae","zh":"南海","ja":"南海"},"name_ko":"남해 시금치","spec":"1봉 / 300g","weight":"300g","price":2980,"orig":3480,"stock":26,"origin":"경남 남해 시금치 작목반","origin_detail":"이마트 직거래 (수확 1일차)","desc":"잎이 두툼하고 단맛이 있어 데쳐서 나물로 무치거나 된장국에 넣기 좋습니다.","fresh":4.7,"in_at":"오늘 04:40","tags":["국내산","무농약"],"keywords":"시금치 섬초 포항초 spinach 나물 된장국"},{"id":"carrot","zone":"C-10","emoji":"🥕","cat":"farm","season":false,"tag":{"ko":"당근","en":"Carrot","zh":"胡萝卜","ja":"にんじん"},"region":{"ko":"제주 구좌","en":"Jeju","zh":"济州","ja":"済州"},"name_ko":"제주 구좌 당근","spec":"1봉 / 1kg","weight":"1kg","price":3480,"orig":3980,"stock":44,"origin":"제주 구좌 당근 작목반","origin_detail":"저온저장 출하 (선별 2일차)","desc":"화산회토에서 자라 색이 진하고 단맛이 좋습니다. 볶음밥·카레·잡채에 많이 쓰입니다.","fresh":4.6,"in_at":"오늘 05:10","tags":["국내산","세척당근"],"keywords":"당근 carrot 볶음밥 카레 잡채 주스"},{"id":"cucumber","zone":"D-01","emoji":"🥒","cat":"farm","season":false,"tag":{"ko":"오이","en":"Cucumber","zh":"黄瓜","ja":"きゅうり"},"region":{"ko":"충남 천안","en":"Cheonan","zh":"天安","ja":"天安"},"name_ko":"천안 백다다기 오이","spec":"1봉 / 3입","weight":"3입","price":2980,"orig":3480,"stock":37,"origin":"충남 천안 오이 작목반","origin_detail":"이마트 직거래 (수확 1일차)","desc":"껍질이 얇고 아삭해 생으로 먹거나 오이무침·오이소박이·냉국에 좋습니다.","fresh":4.6,"in_at":"오늘 05:00","tags":["국내산","GAP우수관리인증"],"keywords":"오이 cucumber 오이무침 오이소박이 냉국 백다다기"},{"id":"chili","zone":"D-02","emoji":"🌶️","cat":"farm","season":false,"tag":{"ko":"청양고추","en":"Cheongyang Chili","zh":"青阳辣椒","ja":"青陽唐辛子"},"region":{"ko":"충남 청양","en":"Cheongyang","zh":"青阳","ja":"青陽"},"name_ko":"청양 청양고추","spec":"1봉 / 200g","weight":"200g","price":1980,"orig":2480,"stock":33,"origin":"충남 청양 고추 작목반","origin_detail":"이마트 직거래 (수확 1일차)","desc":"칼칼한 매운맛으로 찌개·볶음·양념장에 빠지지 않는 한식 대표 고추입니다.","fresh":4.6,"in_at":"오늘 05:00","tags":["국내산"],"keywords":"고추 청양고추 풋고추 꽈리고추 chili pepper 매운"},{"id":"enoki","zone":"D-03","emoji":"🍄","cat":"farm","season":false,"tag":{"ko":"팽이버섯","en":"Enoki Mushroom","zh":"金针菇","ja":"えのき"},"region":{"ko":"충북 음성","en":"Eumseong","zh":"阴城","ja":"陰城"},"name_ko":"국산 팽이버섯","spec":"1봉 / 150g x 3","weight":"450g","price":1480,"orig":1980,"stock":58,"origin":"충북 음성 버섯 재배농가","origin_detail":"오늘 입고","desc":"식감이 쫄깃해 찌개·전골·볶음에 두루 쓰입니다. 새송이·표고와 함께 버섯 코너에 있습니다.","fresh":4.5,"in_at":"오늘 05:20","tags":["국내산"],"keywords":"팽이 팽이버섯 버섯 enoki mushroom 표고 새송이 느타리"},{"id":"perilla","zone":"D-04","emoji":"🌿","cat":"farm","season":false,"tag":{"ko":"깻잎","en":"Perilla Leaves","zh":"紫苏叶","ja":"えごま葉"},"region":{"ko":"충남 금산 추부","en":"Geumsan","zh":"锦山","ja":"錦山"},"name_ko":"파머스픽 신선 추부 깻잎","spec":"1봉 / 30장 내외, 150g","weight":"150g","price":1480,"orig":1850,"stock":22,"origin":"충남 금산 추부깻잎 작목반 박순철 농부","origin_detail":"이마트 9년 단독 계약 산지직송 (수확 2일차)","desc":"일교차가 큰 금산 추부 고랭지에서 깨끗한 암반수로 재배해 잎이 두껍고 알싸하고 깊은 깻잎 향이 일품입니다.","fresh":5.0,"in_at":"오늘 05:00","tags":["GAP우수관리인증","추부지리적표시등록","친환경무농약포장"],"keywords":"깻잎 깨잎 들깻잎 perilla 쌈 깻잎장아찌"},{"id":"egg","zone":"D-05","emoji":"🥚","cat":"daily","season":false,"tag":{"ko":"계란","en":"Eggs","zh":"鸡蛋","ja":"卵"},"region":{"ko":"경기 이천","en":"Icheon","zh":"利川","ja":"利川"},"name_ko":"이천 동물복지 특란","spec":"1판 / 특란 30구","weight":"30구","price":7980,"orig":8980,"stock":46,"origin":"경기 이천 동물복지 인증 농장","origin_detail":"산란 2일 이내 입고","desc":"난각번호로 산란일과 사육환경을 확인할 수 있습니다. 계란말이·계란찜·국에 매일 쓰는 기본 식재료입니다.","fresh":4.7,"in_at":"오늘 05:30","tags":["동물복지인증","HACCP"],"keywords":"계란 달걀 egg 특란 대란 메추리알 계란말이 계란찜"},{"id":"tofu","zone":"D-06","emoji":"⬜","cat":"daily","season":false,"tag":{"ko":"두부","en":"Tofu","zh":"豆腐","ja":"豆腐"},"region":{"ko":"강원 강릉 초당","en":"Gangneung","zh":"江陵","ja":"江陵"},"name_ko":"초당 국산콩 두부","spec":"1모 / 300g","weight":"300g","price":2480,"orig":2980,"stock":52,"origin":"강원 강릉 초당 두부 제조장","origin_detail":"오늘 제조분 입고","desc":"국산콩과 바닷물 간수로 만들어 고소합니다. 된장찌개·부침·조림에 매일 쓰입니다.","fresh":4.7,"in_at":"오늘 05:40","tags":["국산콩100%","HACCP"],"keywords":"두부 순두부 연두부 tofu 된장찌개 두부조림 부침"},{"id":"porkbelly","zone":"D-07","emoji":"🥓","cat":"meat","season":false,"tag":{"ko":"삼겹살","en":"Pork Belly","zh":"五花肉","ja":"豚バラ"},"region":{"ko":"제주","en":"Jeju","zh":"济州","ja":"済州"},"name_ko":"제주 흑돼지 삼겹살","spec":"구이용 / 500g","weight":"500g","price":16900,"orig":19900,"stock":28,"origin":"제주 흑돼지 협력 농가","origin_detail":"도축 3일 이내 · 당일 가공","desc":"한국인이 가장 즐겨 먹는 돼지고기 부위입니다. 구이·수육·김치찌개용으로 두루 쓰입니다.","fresh":4.8,"in_at":"오늘 06:00","tags":["무항생제","이력추적"],"keywords":"삼겹살 돼지고기 pork belly 목살 앞다리 수육 구이 오겹살"},{"id":"beef","zone":"D-08","emoji":"🥩","cat":"meat","season":false,"tag":{"ko":"한우 불고기","en":"Hanwoo Bulgogi","zh":"韩牛烤肉","ja":"韓牛プルコギ"},"region":{"ko":"강원 횡성","en":"Hoengseong","zh":"横城","ja":"横城"},"name_ko":"횡성 한우 1등급 불고기","spec":"불고기용 / 300g","weight":"300g","price":19900,"orig":24900,"stock":19,"origin":"강원 횡성 한우 협력 농가","origin_detail":"도축 5일 이내 · 당일 가공","desc":"결이 고운 한우 앞다리·우둔을 얇게 썰어 불고기·잡채·국거리로 쓰기 좋습니다.","fresh":4.9,"in_at":"오늘 06:00","tags":["한우1등급","이력추적"],"keywords":"한우 소고기 beef 불고기 국거리 등심 bulgogi 장조림 사태"},{"id":"chicken","zone":"D-09","emoji":"🍗","cat":"meat","season":false,"tag":{"ko":"닭고기","en":"Whole Chicken","zh":"整鸡","ja":"丸鶏"},"region":{"ko":"전북 정읍","en":"Jeongeup","zh":"井邑","ja":"井邑"},"name_ko":"국내산 백숙용 생닭","spec":"1마리 / 1kg","weight":"1kg","price":6980,"orig":7980,"stock":34,"origin":"전북 정읍 육계 협력 농가","origin_detail":"도계 1일 이내 입고","desc":"백숙·삼계탕·닭볶음탕용으로 쓰기 좋은 크기입니다. 닭가슴살·닭다리는 같은 매대에 있습니다.","fresh":4.6,"in_at":"오늘 05:50","tags":["무항생제","HACCP"],"keywords":"닭 닭고기 chicken 생닭 백숙 삼계탕 닭볶음탕 닭가슴살 닭다리"},{"id":"kimchi","zone":"D-10","emoji":"🥬","cat":"daily","season":false,"tag":{"ko":"배추김치","en":"Kimchi","zh":"泡菜","ja":"キムチ"},"region":{"ko":"전남 해남","en":"Haenam","zh":"海南","ja":"海南"},"name_ko":"해남 배추 포기김치","spec":"1팩 / 1kg","weight":"1kg","price":8980,"orig":10900,"stock":31,"origin":"전남 해남 김치 제조 협력사","origin_detail":"국산 배추·고춧가루 100%","desc":"국산 배추와 고춧가루로 담근 포기김치입니다. 그대로 먹거나 김치찌개·김치볶음밥에 좋습니다.","fresh":4.7,"in_at":"오늘 06:10","tags":["국산원료100%","HACCP"],"keywords":"김치 kimchi 포기김치 배추김치 깍두기 총각김치 김치찌개 묵은지"},{"id":"chilipowder","zone":"E-01","emoji":"🌶️","cat":"grocery","season":false,"tag":{"ko":"고춧가루","en":"Chili Powder","zh":"辣椒粉","ja":"粉唐辛子"},"region":{"ko":"경북 영양","en":"Yeongyang","zh":"英阳","ja":"英陽"},"name_ko":"영양 태양초 고춧가루","spec":"1봉 / 500g","weight":"500g","price":24900,"orig":29900,"stock":23,"origin":"경북 영양 고추 작목반","origin_detail":"2026년산 햇고추 · 김장용","desc":"햇볕에 말린 태양초를 빻아 색이 곱고 매운맛이 깔끔합니다. 김장·찌개·무침 양념의 기본입니다.","fresh":4.8,"in_at":"어제 15:00","tags":["국산고추100%","2026년산"],"keywords":"고춧가루 고추가루 chili powder 김장 양념 고추"},{"id":"soysauce","zone":"E-02","emoji":"🫙","cat":"grocery","season":false,"tag":{"ko":"간장","en":"Soy Sauce","zh":"酱油","ja":"醤油"},"region":{"ko":"전북 순창","en":"Sunchang","zh":"淳昌","ja":"淳昌"},"name_ko":"순창 전통 국간장","spec":"1병 / 900ml","weight":"900ml","price":7980,"orig":9480,"stock":40,"origin":"전북 순창 전통장류 영농조합","origin_detail":"국산콩 100% · 항아리 숙성","desc":"국·나물 간을 맞추는 국간장입니다. 진간장·양조간장은 같은 매대 아래 칸에 있습니다.","fresh":4.7,"in_at":"어제 15:00","tags":["국산콩100%","전통식품인증"],"keywords":"간장 국간장 진간장 양조간장 soy sauce 조선간장"},{"id":"doenjang","zone":"E-03","emoji":"🟫","cat":"grocery","season":false,"tag":{"ko":"된장","en":"Doenjang","zh":"大酱","ja":"テンジャン"},"region":{"ko":"전북 순창","en":"Sunchang","zh":"淳昌","ja":"淳昌"},"name_ko":"순창 재래식 된장","spec":"1통 / 1kg","weight":"1kg","price":12900,"orig":14900,"stock":27,"origin":"전북 순창 전통장류 영농조합","origin_detail":"국산콩 100% · 1년 숙성","desc":"국산콩 메주로 담가 구수하고 깊은 맛이 납니다. 된장찌개·된장국·쌈장의 기본입니다.","fresh":4.8,"in_at":"어제 15:00","tags":["국산콩100%","전통식품인증"],"keywords":"된장 doenjang soybean paste 된장찌개 된장국 쌈장 청국장"},{"id":"gochujang","zone":"E-04","emoji":"🫙","cat":"grocery","season":false,"tag":{"ko":"고추장","en":"Gochujang","zh":"辣椒酱","ja":"コチュジャン"},"region":{"ko":"전북 순창","en":"Sunchang","zh":"淳昌","ja":"淳昌"},"name_ko":"순창 찹쌀고추장","spec":"1통 / 1kg","weight":"1kg","price":12900,"orig":15900,"stock":32,"origin":"전북 순창 전통장류 영농조합","origin_detail":"국산 고춧가루 · 찹쌀 사용","desc":"찹쌀로 담가 윤기 있고 달큰합니다. 떡볶이·비빔밥·제육볶음 양념에 많이 쓰입니다.","fresh":4.8,"in_at":"어제 15:00","tags":["국산원료","전통식품인증"],"keywords":"고추장 gochujang 떡볶이 비빔밥 초고추장 쌈장 제육"},{"id":"sesameoil","zone":"E-05","emoji":"🫗","cat":"grocery","season":false,"tag":{"ko":"참기름","en":"Sesame Oil","zh":"香油","ja":"ごま油"},"region":{"ko":"경북 안동","en":"Andong","zh":"安东","ja":"安東"},"name_ko":"안동 국산 참기름","spec":"1병 / 300ml","weight":"300ml","price":19800,"orig":23800,"stock":18,"origin":"경북 안동 방앗간 협력사","origin_detail":"국산 참깨 100% · 저온 압착","desc":"국산 참깨를 볶아 짜 고소한 향이 진합니다. 나물·비빔밥·양념장 마무리에 쓰입니다.","fresh":4.9,"in_at":"어제 15:00","tags":["국산참깨100%"],"keywords":"참기름 들기름 sesame oil 참깨 깨 들깨"},{"id":"rice","zone":"F-01","emoji":"🍚","cat":"grocery","season":false,"tag":{"ko":"쌀","en":"Rice","zh":"大米","ja":"お米"},"region":{"ko":"경기 이천","en":"Icheon","zh":"利川","ja":"利川"},"name_ko":"이천 햅쌀 (추청)","spec":"1포 / 10kg","weight":"10kg","price":39900,"orig":44900,"stock":25,"origin":"경기 이천 쌀 영농조합","origin_detail":"2026년산 햅쌀 · 당일 도정","desc":"10월에 수확한 햅쌀을 도정해 밥맛이 찰지고 윤기가 납니다. 현미·잡곡은 같은 매대에 있습니다.","fresh":4.9,"in_at":"오늘 07:00","tags":["2026년산햅쌀","단일품종","당일도정"],"keywords":"쌀 햅쌀 rice 백미 현미 찹쌀 잡곡 밥"},{"id":"laver","zone":"F-02","emoji":"🍙","cat":"grocery","season":false,"tag":{"ko":"김","en":"Laver","zh":"紫菜","ja":"海苔"},"region":{"ko":"전남 완도","en":"Wando","zh":"莞岛","ja":"莞島"},"name_ko":"완도 재래김 (전장)","spec":"1봉 / 10매","weight":"10매","price":4980,"orig":5980,"stock":47,"origin":"전남 완도 김 가공 협력사","origin_detail":"완도산 원초 100%","desc":"바삭하고 향이 좋은 재래김입니다. 김밥김·조미김·김자반도 같은 매대에 있습니다.","fresh":4.7,"in_at":"어제 15:00","tags":["국내산원초"],"keywords":"김 laver seaweed 김밥 김밥김 조미김 김자반 파래김"},{"id":"seaweed","zone":"F-03","emoji":"🌊","cat":"grocery","season":false,"tag":{"ko":"미역","en":"Dried Seaweed","zh":"海带","ja":"わかめ"},"region":{"ko":"부산 기장","en":"Gijang","zh":"机张","ja":"機張"},"name_ko":"기장 건미역","spec":"1봉 / 100g","weight":"100g","price":6980,"orig":8480,"stock":29,"origin":"부산 기장 미역 어촌계","origin_detail":"기장산 자연건조","desc":"물살 센 기장 앞바다에서 자라 쫄깃합니다. 미역국·미역줄기볶음에 좋고, 다시마도 같은 매대에 있습니다.","fresh":4.8,"in_at":"어제 15:00","tags":["국내산","자연건조"],"keywords":"미역 seaweed 미역국 다시마 미역줄기 해조류"},{"id":"fishcake","zone":"F-04","emoji":"🍢","cat":"grocery","season":false,"tag":{"ko":"어묵","en":"Fish Cake","zh":"鱼饼","ja":"おでん"},"region":{"ko":"부산","en":"Busan","zh":"釜山","ja":"釜山"},"name_ko":"부산 사각어묵","spec":"1봉 / 500g","weight":"500g","price":4980,"orig":5980,"stock":38,"origin":"부산 어묵 제조 협력사","origin_detail":"연육 함량 70% 이상","desc":"쫄깃한 부산식 사각어묵입니다. 어묵볶음·어묵탕·떡볶이에 넣기 좋습니다.","fresh":4.6,"in_at":"오늘 06:30","tags":["HACCP"],"keywords":"어묵 오뎅 fish cake 어묵탕 어묵볶음 떡볶이"},{"id":"ricecake","zone":"F-05","emoji":"🍡","cat":"grocery","season":false,"tag":{"ko":"떡볶이떡","en":"Rice Cake","zh":"年糕","ja":"トッポギ餅"},"region":{"ko":"경기 이천","en":"Icheon","zh":"利川","ja":"利川"},"name_ko":"국산쌀 떡볶이떡","spec":"1봉 / 1kg","weight":"1kg","price":4480,"orig":5480,"stock":42,"origin":"경기 이천 떡 제조 협력사","origin_detail":"국산쌀 100% · 오늘 제조","desc":"국산쌀로 만들어 쫄깃합니다. 떡볶이·떡국·떡꼬치에 쓰이고, 떡국떡은 같은 매대에 있습니다.","fresh":4.6,"in_at":"오늘 06:30","tags":["국산쌀100%"],"keywords":"떡 떡볶이 떡볶이떡 떡국떡 가래떡 rice cake tteok"}],"popular":["egg","tofu","scallion","porkbelly","kimchi","apple","crab","rice"]}/*END_DATA*/;
const LANGS=['ko','en','zh','ja'];
const P=DB.products.map(d=>{const name={};LANGS.forEach(l=>name[l]=l==='ko'?d.name_ko:`${d.region[l]} ${d.tag[l]}`);
  return{id:d.id,zone:d.zone,e:d.emoji,cat:d.cat,season:d.season,tag:d.tag,name,region:d.region,spec:d.spec,w:d.weight,price:d.price,orig:d.orig,stock:d.stock,farm:d.origin,sub:d.origin_detail,quote:d.desc,fr:d.fresh,inAt:d.in_at,tags:d.tags,kw:d.keywords,floor:'EF'.includes(d.zone[0])?'1F':'B1'}});
const POP=DB.popular;
const COLS=[110,210,310,410,510];
const FLOORS={
  B1:{h:650,start:[75,635],startLbl:'GATE A',pairs:[['A','A'],['B','B'],['C','C'],['D','D']],labels:['secA','secB','secC','secD'],colors:['#3b7a3f','#2f6d94','#3b7a3f','#8a5a12']},
  '1F':{h:200,start:[75,185],startLbl:'ESCALATOR ▲',pairs:[['E','F']],labels:['secEF'],colors:['#6b4fa0']}};
const ZONES={};
Object.entries(FLOORS).forEach(([fl,F])=>F.pairs.forEach(([s1,s2],i)=>{
  const y0=34+i*150,a=y0+58;
  [[s1,y0,0],[s2,y0+70,s1===s2?5:0]].forEach(([sec,y,k])=>COLS.forEach((x,ci)=>{
    ZONES[`${sec}-${String(k+ci+1).padStart(2,'0')}`]={r:[x,y,88,46],cx:x+44,a,n:i+1,floor:fl}}));
}));
const EXTRA={
 ko:{tab2:'10월 제철 20선',picksT:'10월 지역별 제철식품 20선',season:'🍂 10월 제철',farmH:'농산',seaH:'수산',meatH:'정육',
   secA:'A 10월 제철 농산',secB:'B 10월 제철 수산',secC:'C 데일리 채소',secD:'D 채소·계란·두부·정육·김치',secEF:'E 장류·양념   |   F 곡물·건어물·가공',
   sc_farm:'냉장 오픈쇼케이스 2단',cd_farm:'신선 냉장 4°C 보관',td_farm:'당일수확',
   sc_sea:'수산 빙장 쇼케이스',cd_sea:'수산 0~2°C 빙온 보관',td_sea:'당일입하',
   sc_meat:'정육 냉장 쇼케이스',cd_meat:'정육 0~4°C 냉장 보관',td_meat:'당일가공',
   sc_daily:'일배 냉장 쇼케이스',cd_daily:'냉장 0~10°C 보관',td_daily:'오늘입고',
   sc_grocery:'상온 진열대 3단',cd_grocery:'직사광선 피해 상온 보관',td_grocery:'스테디셀러',
   s1e:d=>`에스컬레이터로 1층 이동 후 ${d}m 직진`,otherFloor:'선택한 상품은 다른 층에 있습니다',more:n=>`외 ${n}건`},
 en:{tab2:'October Top 20',picksT:'October Seasonal Picks by Region',season:'🍂 In season: Oct',farmH:'Produce',seaH:'Seafood',meatH:'Meat',
   secA:'A Oct. seasonal produce',secB:'B Oct. seasonal seafood',secC:'C Everyday vegetables',secD:'D Veg · Eggs · Tofu · Meat · Kimchi',secEF:'E Sauces & Seasoning   |   F Grains · Dried · Processed',
   sc_farm:'Refrigerated open case, tier 2',cd_farm:'Chilled storage 4°C',td_farm:'Same-day harvest',
   sc_sea:'Seafood ice showcase',cd_sea:'Seafood on ice 0–2°C',td_sea:'Landed today',
   sc_meat:'Butcher refrigerated case',cd_meat:'Meat chilled 0–4°C',td_meat:'Cut today',
   sc_daily:'Daily chilled case',cd_daily:'Chilled 0–10°C',td_daily:'Arrived today',
   sc_grocery:'Ambient shelf, tier 3',cd_grocery:'Store at room temp, away from sunlight',td_grocery:'Best seller',
   s1e:d=>`Take the escalator to 1F, then ${d}m straight`,otherFloor:'The selected item is on another floor',more:n=>`+${n} more`},
 zh:{tab2:'10月时令20选',picksT:'10月各地时令食品20选',season:'🍂 10月时令',farmH:'农产',seaH:'水产',
   secA:'A 10月时令农产',secB:'B 10月时令水产',secC:'C 日常蔬菜',secD:'D 蔬菜·鸡蛋·豆腐·肉类·泡菜',secEF:'E 酱类·调料   |   F 粮食·干货·加工',
   sc_farm:'冷藏开放展柜 第2层',cd_farm:'生鲜冷藏 4°C',td_farm:'当日采摘',
   sc_sea:'水产冰鲜展柜',cd_sea:'水产 0~2°C 冰鲜',td_sea:'当日到货',
   sc_meat:'肉类冷藏展柜',cd_meat:'肉类 0~4°C 冷藏',td_meat:'当日分切',
   sc_daily:'日配冷藏展柜',cd_daily:'冷藏 0~10°C',td_daily:'今日到货',
   sc_grocery:'常温货架 第3层',cd_grocery:'避光常温保存',td_grocery:'畅销品',
   s1e:d=>`乘扶梯到1层后直行${d}米`,otherFloor:'所选商品在其他楼层',more:n=>`另有${n}项`},
 ja:{tab2:'10月旬の20選',picksT:'10月 地域別 旬の食材20選',season:'🍂 10月が旬',farmH:'農産',seaH:'水産',
   secA:'A 10月の旬 農産',secB:'B 10月の旬 水産',secC:'C デイリー野菜',secD:'D 野菜・卵・豆腐・精肉・キムチ',secEF:'E 醤類・調味料   |   F 穀物・乾物・加工',
   sc_farm:'冷蔵オープンケース 2段',cd_farm:'生鮮冷蔵 4°C 保管',td_farm:'当日収穫',
   sc_sea:'鮮魚 氷温ショーケース',cd_sea:'鮮魚 0~2°C 氷温保管',td_sea:'本日入荷',
   sc_meat:'精肉 冷蔵ショーケース',cd_meat:'精肉 0~4°C 冷蔵',td_meat:'本日加工',
   sc_daily:'日配 冷蔵ショーケース',cd_daily:'冷蔵 0~10°C 保管',td_daily:'本日入荷',
   sc_grocery:'常温棚 3段',cd_grocery:'直射日光を避けて常温保管',td_grocery:'定番商品',
   s1e:d=>`エスカレーターで1階へ、${d}m直進`,otherFloor:'選択した商品は別の階にあります',more:n=>`ほか${n}件`}};
const I18={
ko:{store:'역삼점',gateA:'B1F 청과/신선 게이트 A 입구',ph:'신선과일·채소 검색',tab1:'신선지도',tab2:'오늘의 파머스픽',tab3:'코너/매대안내',big:'큰글씨/안내',curloc:'현재 위치',curpos:'🏬 B1F 신선매장 채소 코너 입구 (청과 게이트 A) 실시간 감지',voice:'음성 검색',uwb:'실내측위 오차',pop:'인기 검색',mapTitle:'신선식품 실시간 매장 맵',short:'최단 동선',restart:'처음부터',showcase:'냉장 오픈쇼케이스 2단',cold:'신선 냉장 4°C 보관',today:'당일수확',stock:'실시간 재고',left:'남음',fresh:'신선도/향기 지수',inAt:'입고 일시',sendT:'내 폰으로 위치 & 레시피 전송',sendD:'카메라로 QR 스캔 시 고객님의 모바일 앱 및 스마트카트 화면에 실시간 동선이 연동됩니다.',kakao:'💬 카카오톡 전송',sms:'💬 문자 전송',go:z=>`${z} 매대로 동선 길안내 시작 ›`,stop:'안내 종료',vmode:'시각/고령자 음성 안내 모드',vOn:'음성 켜짐 (스피커)',vOff:'음성 꺼짐',mob:'모바일로 지도 전송',call:'직원 호출',upd:'(방금 전 업데이트)',grade:'A등급<br>산지인증',s1:(d)=>`청과 게이트 A 입구에서 ${d}m 직진`,s1d:'통로 끝 교차로까지 이동하세요.',s2:(n,d)=>`${n}번 통로로 우회전 후 ${d}m`,s2d:z=>`통로에서 방향을 바꿔 ${z} 매대 방향으로 이동하세요.`,s3:z=>`${z} 매대 도착`,s3d:'냉장 쇼케이스 2단에서 상품을 찾아보세요.',step:n=>`${n}단계`,arrived:'도착했습니다! 즐거운 쇼핑 되세요 🎉',noRes:'검색 결과가 없습니다',noMic:'이 기기는 음성 인식을 지원하지 않습니다',listen:'듣는 중… 말씀해 주세요',sentK:'카카오톡으로 전송했습니다',sentS:'문자로 전송했습니다',called:'직원을 호출했습니다. 잠시만 기다려 주세요.',callT:'직원 호출',callD:'가까운 직원이 곧 도착합니다.',callOk:'호출하기',cancel:'닫기',mobT:'모바일로 지도 전송',mobD:'아래 QR을 스캔하면 현재 선택한 매대 동선이 휴대폰에 열립니다.',picksT:'오늘의 파머스픽',zonesT:'코너/매대 안내',floor1:'1층 가공식품 매장은 이 키오스크에서 안내 준비 중입니다.',m:'m'},
en:{store:'Yeoksam',gateA:'B1F Produce Gate A entrance',ph:'Search fruit & veggies',tab1:'Fresh Map',tab2:"Today's Farmer's Pick",tab3:'Corners / Shelves',big:'Large Text',curloc:'Current location',curpos:'🏬 B1F Fresh Zone – Vegetable entrance (Gate A) detected live',voice:'Voice search',uwb:'indoor accuracy',pop:'Popular',mapTitle:'Live Fresh Food Store Map',short:'Shortest route',restart:'Restart',showcase:'Refrigerated open case, tier 2',cold:'Chilled storage 4°C',today:'Same-day harvest',stock:'Live stock',left:'left',fresh:'Freshness / aroma',inAt:'Received',sendT:'Send location & recipe to my phone',sendD:'Scan the QR with your camera to sync the live route to your mobile app or smart cart.',kakao:'💬 Send via KakaoTalk',sms:'💬 Send via SMS',go:z=>`Start route to shelf ${z} ›`,stop:'Stop guidance',vmode:'Visual / senior voice guide mode',vOn:'Voice on (speaker)',vOff:'Voice off',mob:'Send map to mobile',call:'Call staff',upd:'(updated just now)',grade:'Grade A<br>Certified',s1:d=>`Walk straight ${d}m from Gate A`,s1d:'Continue to the end-of-aisle intersection.',s2:(n,d)=>`Turn right into aisle ${n}, then ${d}m`,s2d:z=>`Change direction and head toward shelf ${z}.`,s3:z=>`Arrived at shelf ${z}`,s3d:'Look in the refrigerated case, tier 2.',step:n=>`Step ${n}`,arrived:'You have arrived! Happy shopping 🎉',noRes:'No results',noMic:'Voice recognition is not supported on this device',listen:'Listening… please speak',sentK:'Sent via KakaoTalk',sentS:'Sent via SMS',called:'Staff has been called. Please wait a moment.',callT:'Call staff',callD:'The nearest staff member will arrive shortly.',callOk:'Call now',cancel:'Close',mobT:'Send map to mobile',mobD:'Scan the QR below to open the selected route on your phone.',picksT:"Today's Farmer's Pick",zonesT:'Corners / Shelves',floor1:'1F processed foods guidance is coming soon on this kiosk.',m:'m'},
zh:{store:'驿三店',gateA:'B1F 果蔬生鲜 A 入口',ph:'搜索水果蔬菜',tab1:'生鲜地图',tab2:'今日农夫精选',tab3:'区域/货架指南',big:'大字/指南',curloc:'当前位置',curpos:'🏬 B1F 生鲜区 蔬菜入口 (A门) 实时定位',voice:'语音搜索',uwb:'室内定位误差',pop:'热门搜索',mapTitle:'生鲜实时卖场地图',short:'最短路线',restart:'重新开始',showcase:'冷藏开放展柜 第2层',cold:'生鲜冷藏 4°C',today:'当日采摘',stock:'实时库存',left:'剩余',fresh:'新鲜度/香气指数',inAt:'入库时间',sendT:'发送位置和食谱到我的手机',sendD:'用相机扫描二维码，路线将同步到您的手机应用或智能购物车。',kakao:'💬 KakaoTalk 发送',sms:'💬 短信发送',go:z=>`开始前往 ${z} 货架 ›`,stop:'结束导航',vmode:'视障/老年人语音导览模式',vOn:'语音开启 (扬声器)',vOff:'语音关闭',mob:'发送地图到手机',call:'呼叫员工',upd:'(刚刚更新)',grade:'A级<br>产地认证',s1:d=>`从 A 门直行 ${d} 米`,s1d:'请前往通道尽头的路口。',s2:(n,d)=>`右转进入${n}号通道，再走${d}米`,s2d:z=>`转向并前往 ${z} 货架方向。`,s3:z=>`已到达 ${z} 货架`,s3d:'请在冷藏展柜第2层查找商品。',step:n=>`第${n}步`,arrived:'已到达！祝购物愉快 🎉',noRes:'没有结果',noMic:'此设备不支持语音识别',listen:'正在聆听…请说话',sentK:'已通过 KakaoTalk 发送',sentS:'已通过短信发送',called:'已呼叫员工，请稍候。',callT:'呼叫员工',callD:'最近的员工马上就到。',callOk:'呼叫',cancel:'关闭',mobT:'发送地图到手机',mobD:'扫描下方二维码，在手机上打开所选路线。',picksT:'今日农夫精选',zonesT:'区域/货架指南',floor1:'1层加工食品区的导览即将上线。',m:'米'},
ja:{store:'ヨクサム店',gateA:'B1F 青果/生鮮 ゲートA 入口',ph:'果物・野菜を検索',tab1:'生鮮マップ',tab2:'今日のファーマーズピック',tab3:'コーナー/売場案内',big:'大きい文字',curloc:'現在地',curpos:'🏬 B1F 生鮮売場 野菜コーナー入口 (ゲートA) リアルタイム検知',voice:'音声検索',uwb:'屋内測位誤差',pop:'人気検索',mapTitle:'生鮮食品リアルタイム売場マップ',short:'最短ルート',restart:'最初から',showcase:'冷蔵オープンケース 2段',cold:'生鮮冷蔵 4°C 保管',today:'当日収穫',stock:'リアルタイム在庫',left:'残り',fresh:'鮮度/香り指数',inAt:'入荷日時',sendT:'位置とレシピをスマホに送信',sendD:'カメラでQRをスキャンすると、スマホアプリやスマートカートにルートが連動します。',kakao:'💬 KakaoTalk送信',sms:'💬 SMS送信',go:z=>`${z} 売場へ案内を開始 ›`,stop:'案内終了',vmode:'視覚/高齢者向け音声案内モード',vOn:'音声オン (スピーカー)',vOff:'音声オフ',mob:'モバイルへ地図送信',call:'スタッフ呼出',upd:'(たった今更新)',grade:'A等級<br>産地認証',s1:d=>`ゲートAから${d}m直進`,s1d:'通路の突き当たりの交差点まで進んでください。',s2:(n,d)=>`${n}番通路を右折して${d}m`,s2d:z=>`向きを変えて ${z} 売場へ進んでください。`,s3:z=>`${z} 売場に到着`,s3d:'冷蔵ケース2段で商品を探してください。',step:n=>`${n}段階`,arrived:'到着しました！お買い物をお楽しみください 🎉',noRes:'結果がありません',noMic:'この端末は音声認識に対応していません',listen:'聞いています… お話しください',sentK:'KakaoTalkで送信しました',sentS:'SMSで送信しました',called:'スタッフを呼び出しました。少々お待ちください。',callT:'スタッフ呼出',callD:'近くのスタッフがすぐに伺います。',callOk:'呼び出す',cancel:'閉じる',mobT:'モバイルへ地図送信',mobD:'下のQRをスキャンすると、選択中のルートがスマホで開きます。',picksT:'今日のファーマーズピック',zonesT:'コーナー/売場案内',floor1:'1F加工食品売場の案内は準備中です。',m:'m'}
};

LANGS.forEach(l=>Object.assign(I18[l],EXTRA[l]));
/* ---------- 상태 ---------- */
const S={lang:'ko',sel:P[0],zoom:1,rot:0,floor:'B1',navigating:false,progress:0,step:0,voice:false,speakStep:-1,anim:null,route:null,len:0,vb:[0,0,640,420]};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const t=k=>I18[S.lang][k];
const fmt=n=>n.toLocaleString('ko-KR');
const NS='http://www.w3.org/2000/svg';

/* ---------- 토스트/모달 ---------- */
let tt;function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),2600)}
function openModal(html){$('#sheet').innerHTML=html;$('#modal').classList.add('on');$$('#sheet .cx').forEach(b=>b.onclick=closeModal)}
function closeModal(){$('#modal').classList.remove('on')}
$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});

/* ---------- 가짜 QR(장식용 패턴) ---------- */
function qrSvg(seed){
  const n=25,cells=[];let h=0;for(const c of seed)h=(h*31+c.charCodeAt(0))>>>0;
  const rnd=()=>{h^=h<<13;h>>>=0;h^=h>>>17;h^=h<<5;h>>>=0;return h/4294967295};
  const fin=(x,y)=>[[0,0],[n-7,0],[0,n-7]].some(([a,b])=>x>=a&&x<a+7&&y>=b&&y<b+7);
  let r='';
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){
    if(fin(x,y)){const [a,b]=[[0,0],[n-7,0],[0,n-7]].find(([a,b])=>x>=a&&x<a+7&&y>=b&&y<b+7);const dx=x-a,dy=y-b;
      const on=dx==0||dx==6||dy==0||dy==6||(dx>=2&&dx<=4&&dy>=2&&dy<=4);if(on)r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02"/>`}
    else if(rnd()>.52)r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02"/>`}
  return `<svg viewBox="0 0 ${n} ${n}" fill="#111" style="width:100%;height:100%">${r}</svg>`;
}

/* ---------- 지도 ---------- */
function buildMap(){
  const m=$('#map');m.innerHTML='';const L=I18[S.lang],F=FLOORS[S.floor];
  const add=(tag,attr,parent=m)=>{const e=document.createElementNS(NS,tag);for(const k in attr)e.setAttribute(k,attr[k]);parent.appendChild(e);return e};
  const txt=(x,y,str,attr={},parent=m)=>{const e=add('text',Object.assign({x,y},attr),parent);e.textContent=str;return e};
  add('rect',{x:10,y:10,width:620,height:F.h-20,rx:14,fill:'#F7F8F5',stroke:'#E1E4DD'});
  add('rect',{x:60,y:20,width:30,height:F.h-25,rx:6,fill:'#ECEFE8'});
  F.pairs.forEach((p,i)=>{const y0=34+i*150;add('rect',{x:60,y:y0+46,width:550,height:24,rx:6,fill:'#ECEFE8'});
    txt(110,y0-9,L[F.labels[i]],{'font-size':11,'font-weight':800,fill:F.colors[i]});
    txt(604,y0+62,`${i+1}`,{'font-size':10,'font-weight':800,fill:'#9aa39a','text-anchor':'end'});});
  txt(98,F.h-12,F.startLbl,{'font-size':10,'font-weight':800,fill:'#0A6B34'});
  Object.entries(ZONES).filter(([,z])=>z.floor===S.floor).forEach(([id,z])=>{
    const p=P.find(p=>p.zone===id);
    const g=add('g',{class:'zone'+(S.sel.zone===id?' sel':'')+(p?' c-'+p.cat:''),'data-z':id});
    add('rect',{x:z.r[0],y:z.r[1],width:z.r[2],height:z.r[3],rx:9},g);
    txt(z.cx,z.r[1]+12,id,{style:'font-size:9px'},g);
    txt(z.cx,z.r[1]+30,p?p.e:'',{style:'font-size:15px;font-weight:400'},g);
    txt(z.cx,z.r[1]+42,p?p.tag[S.lang]:'',{style:'font-size:8.5px;font-weight:700'},g);
    g.addEventListener('click',()=>{if(p)select(p)});
  });
  const z=ZONES[S.sel.zone];S.onFloor=z.floor===S.floor;
  const st=F.start,pts=[st,[75,z.a],[z.cx,z.a]];
  S.pts=pts;
  S.route=add('path',{d:'M'+pts.map(p=>p.join(' ')).join(' L'),class:'route',style:S.onFloor?'':'display:none'});
  S.len=S.route.getTotalLength();
  if(S.onFloor)add('circle',{cx:z.cx,cy:z.a,r:8,fill:'#D0201B',stroke:'#fff','stroke-width':3});
  S.me=add('circle',{cx:st[0],cy:st[1],r:8,fill:'#1d6fe8',stroke:'#fff','stroke-width':3});
  S.halo=add('circle',{cx:st[0],cy:st[1],r:16,fill:'#1d6fe8','fill-opacity':.18});
  $$('.floor button').forEach(b=>b.classList.toggle('on',b.dataset.fl===S.floor));
  setProgress(S.progress);
  applyView();
}
function applyView(){
  const H=FLOORS[S.floor].h,cx=320,cy=H/2,w=640/S.zoom,h=H/S.zoom;
  let x=cx-w/2,y=cy-h/2;
  if(S.zoom>1){const p=pointAt(S.progress);x=Math.max(0,Math.min(640-w,p[0]-w/2));y=Math.max(0,Math.min(H-h,p[1]-h/2))}
  $('#map').setAttribute('viewBox',`${x} ${y} ${w} ${h}`);
  $('#map').style.transform=`rotate(${S.rot}deg) scale(${S.rot%180?0.65:1})`;
  $('#map').style.transition='transform .4s';
}
function pointAt(p){const pt=S.route.getPointAtLength(S.len*p);return [pt.x,pt.y]}
function setProgress(p){
  S.progress=p;const [x,y]=pointAt(p);
  S.me.setAttribute('cx',x);S.me.setAttribute('cy',y);S.halo.setAttribute('cx',x);S.halo.setAttribute('cy',y);
  const metersTotal=Math.round(S.len*0.05);
  // 단계 계산: 구간 경계
  const b1=segLen(0,1)/S.len;
  const step=p<b1*0.999?(0):(p<0.999?1:2);
  updateGuide(step,metersTotal,p);
}
function segLen(a,b){return Math.hypot(S.pts[b][0]-S.pts[a][0],S.pts[b][1]-S.pts[a][1])}

/* ---------- 안내 카드 ---------- */
function updateGuide(step,meters,p){
  const z=S.sel.zone,L=I18[S.lang];
  const d=Math.round(segLen(0,1)*0.05),d2=Math.round(segLen(1,2)*0.05),zz=ZONES[z];
  const arrows=['↑','↱','⚑'];
  const titles=[(zz.floor==='1F'?L.s1e:L.s1)(d),L.s2(zz.n,d2),L.s3(z)];
  const descs=[L.s1d,L.s2d(z),L.s3d];
  if(!S.onFloor){$('#turn').textContent='⇅';$('#stepNo').textContent=zz.floor;$('#stepT').textContent=L.otherFloor;$('#stepD').textContent=`${S.sel.tag[S.lang]} · ${z}`;S._zone=null;return}
  if(S.step!==step||S._lang!==S.lang||S._zone!==z){
    S.step=step;S._lang=S.lang;S._zone=z;S._speak=true;
    $('#turn').textContent=arrows[step];
    $('#stepNo').textContent=L.step(step+1);
    $('#stepT').textContent=titles[step];
    $('#stepD').textContent=descs[step];
    if(S.voice&&S.navigating)speak(titles[step]+'. '+descs[step]);
  }
}
function speak(txt){
  if(!('speechSynthesis' in window))return;
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);
  u.lang={ko:'ko-KR',en:'en-US',zh:'zh-CN',ja:'ja-JP'}[S.lang];speechSynthesis.speak(u);
}

/* ---------- 선택/렌더 ---------- */
function select(p){
  stopNav(true);S.sel=p;S.floor=p.floor;S.progress=0;S.step=-1;
  $('#q').value=p.tag[S.lang];renderAll();
  if(S.voice)speak(p.name[S.lang]);
}
function renderAll(){
  const p=S.sel,L=I18[S.lang];
  document.documentElement.lang=S.lang;
  $$('[data-t]').forEach(e=>{const v=L[e.dataset.t];if(typeof v==='string')e.textContent=v});
  $('#q').placeholder={ko:'검색어를 입력하세요',en:'Type to search',zh:'请输入搜索词',ja:'検索ワードを入力'}[S.lang];
  $('#dz').textContent=p.zone;
  $('#pname').textContent=p.name[S.lang];$('#pspec').textContent=p.spec+(p.season?' · '+L.season:'');
  $('#pemoji').textContent=p.e;$('#pw').textContent=p.w;
  const sea=p.cat==='sea';$('.pimg').classList.toggle('sea',sea);$('.fav').textContent=sea?'🚢':'🚜';
  $('[data-t=showcase]').textContent=L['sc_'+p.cat];$('[data-t=cold]').textContent=L['cd_'+p.cat];$('[data-t=today]').textContent=L['td_'+p.cat];
  $('.pimg').className='pimg c-'+p.cat;$('.fav').textContent={farm:'🚜',sea:'🚢',meat:'🐄',daily:'🧺',grocery:'🏺'}[p.cat];
  const off=Math.round((1-p.price/p.orig)*100);
  $('#pd').textContent=off+'%';$('#pp').textContent=fmt(p.price);$('#po').textContent=fmt(p.orig)+'원';
  renderStock();
  $('#farm').textContent=p.farm;$('#farmsub').textContent=p.sub;$('#grade').innerHTML=L.grade;
  $('#quote').textContent='“'+p.quote+'”';
  $('#fr').textContent=p.fr.toFixed(1);$('#stars').textContent='★'.repeat(Math.round(p.fr))+'☆'.repeat(5-Math.round(p.fr));
  $('#inat').textContent=p.inAt;
  $('#ptags').innerHTML=p.tags.map(x=>`<span>#${x}</span>`).join('');
  $('#qr').innerHTML=qrSvg('emart-kiosk01-'+p.zone);
  $('#gtagN').textContent=p.tag[S.lang];$('#gtagZ').textContent=p.zone;
  $('#fN').textContent=p.tag[S.lang];$('#fZ').textContent=p.zone;
  $('#chips').innerHTML=chipList().map(x=>`<button class="chip${x.id===p.id?' on':''}" data-id="${x.id}">${x.id===p.id?'✓ ':''}#${x.tag[S.lang]}${x.id===p.id?`<i>${x.zone}</i>`:''}</button>`).join('');
  $$('#chips .chip').forEach(b=>b.onclick=()=>select(P.find(x=>x.id===b.dataset.id)));
  $('#go').textContent=S.navigating?L.stop:L.go(p.zone);
  $('#go').classList.toggle('stop',S.navigating);
  $('#vtog').lastChild.textContent=S.voice?L.vOn:L.vOff;
  $('#vtog').classList.toggle('on',S.voice);
  S._zone=null;buildMap();
}
function chipList(){const l=POP.map(id=>P.find(x=>x.id===id));if(!l.includes(S.sel))l.unshift(S.sel);return l}
function renderStock(){
  const p=S.sel,L=I18[S.lang];
  $('#ps').textContent=p.stock;$('#stk').classList.toggle('low',p.stock<=10);
  $('#upd').textContent=L.upd;
}

/* ---------- 검색 ---------- */
function norm(x){return x.toLowerCase().replace(/[\s#]/g,'')}
function matches(q){q=norm(q);if(!q)return[];const sc=p=>{const tags=Object.values(p.tag).map(norm);if(tags.includes(q))return 0;if(tags.some(t=>t.startsWith(q)))return 1;if(tags.some(t=>t.includes(q))||norm(p.name.ko).includes(q))return 2;if(p.kw.toLowerCase().split(/\s+/).some(k=>k.includes(q)))return 3;if(Object.values(p.name).some(n=>norm(n).includes(q))||norm(p.zone).includes(q)||norm(p.region.ko).includes(q))return 4;return 9};
  return P.map(p=>[sc(p),p]).filter(x=>x[0]<9).sort((a,b)=>a[0]-b[0]).map(x=>x[1])}
function showSug(){
  const q=$('#q').value,r=matches(q),box=$('#sug');
  if(!q.trim()){box.classList.remove('on');return}
  box.innerHTML=r.length?r.slice(0,8).map(p=>`<button data-id="${p.id}"><span>${p.e} ${p.tag[S.lang]} <small style="color:#888">${p.name[S.lang]}</small></span><em>${p.floor==='1F'?'1F · ':''}${p.zone}</em></button>`).join('')+(r.length>8?`<button disabled style="color:#888;font-size:.85rem">${t('more')(r.length-8)}</button>`:''):`<button disabled style="color:#888">${t('noRes')}</button>`;
  box.classList.add('on');
  $$('#sug button[data-id]').forEach(b=>b.onclick=()=>{select(P.find(x=>x.id===b.dataset.id));box.classList.remove('on')});
}
$('#q').addEventListener('input',showSug);
$('#q').addEventListener('keydown',e=>{if(e.key==='Enter'){const r=matches($('#q').value);if(r[0]){select(r[0]);$('#sug').classList.remove('on');$('#q').blur()}}});
$('#clr').onclick=()=>{$('#q').value='';$('#sug').classList.remove('on');$('#q').focus()};
document.addEventListener('click',e=>{if(!e.target.closest('.searchbox'))$('#sug').classList.remove('on')});
$('#hsearch').onclick=()=>{$('#q').focus();$('#q').scrollIntoView({behavior:'smooth',block:'center'})};

/* 음성 검색 */
let rec=null;
$('#mic').onclick=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){toast(t('noMic'));return}
  if(rec){rec.stop();return}
  rec=new SR();rec.lang={ko:'ko-KR',en:'en-US',zh:'zh-CN',ja:'ja-JP'}[S.lang];rec.interimResults=false;
  $('#mic').classList.add('rec');toast(t('listen'));
  rec.onresult=e=>{const v=e.results[0][0].transcript;$('#q').value=v;const r=matches(v);if(r[0])select(r[0]);else showSug()};
  rec.onend=()=>{rec=null;$('#mic').classList.remove('rec')};
  rec.onerror=()=>{rec=null;$('#mic').classList.remove('rec')};
  rec.start();
};

/* ---------- 길안내 ---------- */
function startNav(){
  S.navigating=true;S.progress=0;S.step=-1;
  const dur=Math.max(6000,S.len*38);const t0=performance.now();
  cancelAnimationFrame(S.anim);
  const tick=now=>{
    const p=Math.min(1,(now-t0)/dur);setProgress(p);applyView();
    if(p<1&&S.navigating)S.anim=requestAnimationFrame(tick);
    else if(p>=1){S.navigating=false;$('#go').textContent=t('go')(S.sel.zone);$('#go').classList.remove('stop');toast(t('arrived'));if(S.voice)speak(t('arrived'))}
  };
  S.anim=requestAnimationFrame(tick);
  renderGoBtn();
}
function stopNav(silent){S.navigating=false;cancelAnimationFrame(S.anim);if(!silent){renderGoBtn()}}
function renderGoBtn(){$('#go').textContent=S.navigating?t('stop'):t('go')(S.sel.zone);$('#go').classList.toggle('stop',S.navigating)}
$('#go').onclick=()=>{if(S.navigating){stopNav();}else{if(!S.onFloor){S.floor=S.sel.floor;S.progress=0;S._zone=null;buildMap()}startNav()}};
$('#restart').onclick=()=>{stopNav(true);S.progress=0;S.step=-1;setProgress(0);applyView();renderGoBtn();if(S.voice)speak(t('s1')(Math.round(segLen(0,1)*0.05)))};
$('#gtag').onclick=()=>{S.zoom=1;applyView();toast(`${S.sel.tag[S.lang]} · ${S.sel.zone}`)};
$('#short').onclick=e=>{e.currentTarget.classList.toggle('off')};

/* ---------- 지도 컨트롤 ---------- */
$('#zi').onclick=()=>{S.zoom=Math.min(3,+(S.zoom+.5).toFixed(1));applyView()};
$('#zo').onclick=()=>{S.zoom=Math.max(1,+(S.zoom-.5).toFixed(1));applyView()};
$('#rot').onclick=()=>{S.rot=(S.rot+90)%360;applyView()};
$$('.floor button').forEach(b=>b.onclick=()=>{stopNav(true);S.floor=b.dataset.fl;S.progress=0;S.zoom=1;S._zone=null;buildMap();renderGoBtn()});

/* ---------- 하단/보조 ---------- */
$$('#lang button').forEach(b=>b.onclick=()=>{$$('#lang button').forEach(x=>x.classList.remove('on'));b.classList.add('on');S.lang=b.dataset.l;$('#q').value='';renderAll()});
$('#bigBtn').onclick=()=>document.body.classList.toggle('big');
$('#vtog').onclick=()=>{S.voice=!S.voice;renderAll();if(S.voice)speak(t('vOn'));else speechSynthesis&&speechSynthesis.cancel()};
$('#kakao').onclick=()=>toast(t('sentK'));
$('#sms').onclick=()=>toast(t('sentS'));
$('#mobBtn').onclick=()=>openModal(`<h3>${t('mobT')}</h3><div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap"><div style="width:180px;height:180px;background:#fff;border:1px solid #eee;border-radius:14px;padding:12px">${qrSvg('mobile-'+S.sel.zone)}</div><p style="flex:1;min-width:200px;line-height:1.6;color:#555">${t('mobD')}<br><b>#${S.sel.tag[S.lang]} · ${S.sel.zone}</b></p></div><button class="close cx">${t('cancel')}</button>`);
$('#callBtn').onclick=()=>openModal(`<h3>🎧 ${t('callT')}</h3><p style="color:#555">${t('callD')}</p><button class="close cx" style="background:var(--red);color:#fff" id="callOk">${t('callOk')}</button><button class="close cx">${t('cancel')}</button>`);
document.addEventListener('click',e=>{if(e.target.id==='callOk')toast(t('called'))});

/* 탭 */
$$('.tab').forEach(b=>b.onclick=()=>{
  $$('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const k=b.dataset.tab;
  if(k==='picks'){const it=p=>`<button class="cx" data-id="${p.id}"><span><b>${p.e} ${p.name[S.lang]}</b><small>📍 ${p.region[S.lang==='ko'?0:LANGS.indexOf(S.lang)]} · ${p.zone}</small></span><span style="text-align:right"><b style="color:var(--red)">${fmt(p.price)}원</b><small style="text-decoration:line-through">${fmt(p.orig)}원</small></span></button>`;openModal(`<h3>🍂 ${t('picksT')}</h3><div class="list"><h4>🥬 ${t('farmH')} (10)</h4>${P.filter(p=>p.season&&p.cat==='farm').map(it).join('')}<h4>🐟 ${t('seaH')} (9)</h4>${P.filter(p=>p.season&&p.cat==='sea').map(it).join('')}<h4>🥩 ${t('meatH')} (1)</h4>${P.filter(p=>p.season&&p.cat==='meat').map(it).join('')}</div><button class="close cx">${t('cancel')}</button>`);bindList()}
  if(k==='zones'){openModal(`<h3>🗺 ${t('zonesT')}</h3><div class="list">${Object.keys(ZONES).map(z=>{const p=P.find(x=>x.zone===z);return `<button class="cx" data-id="${p.id}"><span><b>${z}</b><small>${p.tag[S.lang]}</small></span><span>${p.e}</span></button>`}).join('')}</div><button class="close cx">${t('cancel')}</button>`);bindList()}
  if(k==='map'){closeModal()}
});
function bindList(){$$('#sheet .list button').forEach(b=>b.addEventListener('click',()=>{select(P.find(x=>x.id===b.dataset.id));$$('.tab').forEach(x=>x.classList.toggle('on',x.dataset.tab==='map'))}))}
$('#modal').addEventListener('click',()=>{ if(!$('#modal').classList.contains('on'))$$('.tab').forEach(x=>x.classList.toggle('on',x.dataset.tab==='map'))});
document.querySelector('.hdr').addEventListener('click',e=>{if(e.target.closest('.tab[data-tab="map"]'))closeModal()});

/* 실시간 재고 시뮬레이션 */
setInterval(()=>{
  const p=P[Math.floor(Math.random()*P.length)];
  if(p.stock>3&&Math.random()<.6){p.stock-=1;if(p===S.sel){renderStock()}}
},6000);

/* 터치 핀치/드래그 없이도 사용 가능하도록 휠 줌 */
$('#mapwrap').addEventListener('wheel',e=>{e.preventDefault();S.zoom=Math.min(3,Math.max(1,+(S.zoom+(e.deltaY<0?.25:-.25)).toFixed(2)));applyView()},{passive:false});

renderAll();
