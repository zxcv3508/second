import React, { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { shoppingCartState } from "../../../../../GlobalState/shoppingCart";
import postAPI from "../../../../../API/postAPI";

// 로딩 중인지, 주문 가능한지로 비활성화 여부 판단
// 주문하기 클릭시 makePurchaseForm로 POST 바디 생성 (전역 상태 shoppingCart, countAndPrice 활용)
// 주문 성공, 실패시 해당 페이지로 이동
const OrderButton = ({ countAndPrice, setCountAndPrice }) => {
  const postURL = process.env.REACT_APP_POST_URL
    ? process.env.REACT_APP_POST_URL
    : "http://localhost:3001/purchaselog";
  const shoppingCart = useRecoilValue(shoppingCartState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSuccess = () => {
    setIsLoading(false);
    setCountAndPrice([0, 0]);
    navigate("/complete");
  };

  const onError = () => {
    setIsLoading(false);
    navigate("/error");
  };

  const makePurchaseForm = () => {
    const body = {
      purchaseItems: [],
      totalCount: countAndPrice[0],
      totalPrice: countAndPrice[1],
    };
    shoppingCart.forEach((purchaseCount, productId) => {
      if (purchaseCount > 0) {
        body.purchaseItems.push({
          productId,
          purchaseCount,
        });
      }
    });
    return body;
  };

  const requestPurchase = () => {
    setIsLoading(true);
    postAPI(postURL, makePurchaseForm(), onSuccess, onError);
  };

  return (
    <S.Button
      onClick={requestPurchase}
      disabled={!countAndPrice[0] || isLoading}
    >
      {isLoading ? "로딩중..." : "주문하기"}
    </S.Button>
  );
};
export default OrderButton;
