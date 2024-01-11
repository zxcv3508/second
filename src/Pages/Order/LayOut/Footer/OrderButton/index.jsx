import React, { useState } from "react";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { shoppingCartState } from "../../../../../GlobalState/shoppingCart";
import postAPI from "../../../../../API/postAPI";
import useNavigator from "../../../../../Hooks/useNavigator";

const OrderButton = ({ countAndPrice, setCountAndPrice }) => {
  const postURL = process.env.REACT_APP_POST_URL
    ? process.env.REACT_APP_POST_URL
    : "http://localhost:3001/purchaselog";
  const shoppingCart = useRecoilValue(shoppingCartState);
  const [isLoading, setIsLoading] = useState(false);
  const [navigateToDestination] = useNavigator();

  const onSuccess = () => {
    setIsLoading(false);
    setCountAndPrice([0, 0]);
    navigateToDestination("/complete");
  };

  const onError = () => {
    navigateToDestination("/error");
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
