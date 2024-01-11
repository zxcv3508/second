### 실행 순서

1. 모듈 설치
  - ``npm i``
2. 로컬 서버 실행
  - ``npm run server`` 명령어로 로컬 서버 실행
3. 프론트 실행
  - ``npm start``

### POST API 명세
(src/db/db.json에 임의로 아래와 같은 POST 엔드포인트 생성)

- purchaselog: end point
- purchaseItems: 구매 목록 배열, 제품 아이디(productId)와 수량(purchaseCount)으로 구성 (0개인 경우 요청 바디에 미포함)
- totalCount: 총 구매 개수
- totalPrice: 총 가격

```
"purchaselog": [
    {
      "purchaseItems": [
        {
          "productId": "47342-3",
          "purchaseCount": 2
        },
        {
          "productId": "12345-6",
          "purchaseCount": 1
        }
      ],
      "totalCount": 3,
      "totalPrice": 240000,
      "id": "faba"
    }
```

### .env 파일 활용
3001포트를 이미 사용 중일 경우, 최대 개수 테스트 등을 위한 환경변수
```
REACT_APP_GET_URL = http://localhost:3001/items
REACT_APP_POST_URL = http://localhost:3001/purchaselog
REACT_APP_LIMIT_COUNT = 999
```
기본 세팅은 위와 같고 필요시 변경 후 반드시 재시작 필요
환경변수 제거시 위와 같은 기본 세팅으로 실행됨

