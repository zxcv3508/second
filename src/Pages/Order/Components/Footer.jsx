import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { countAndPriceState } from "../../../GlobalState/countAndPrice";
import { shoppingCartState } from "../../../GlobalState/shoppingCart";
import postAPI from "../../../API/postAPI";
import useNavigator from "../../../Hooks/useNavigator";
import * as S from "../style";

const Footer = () => {
  const countAndPrice = useRecoilValue(countAndPriceState);
  const shoppingCart = useRecoilValue(shoppingCartState);
  const [isLoading, setIsLoading] = useState(false);
  const [navigateToDestination] = useNavigator();

  const onSuccess = () => {
    setIsLoading(false);
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
    postAPI(
      "http://localhost:3000/purchaselog",
      makePurchaseForm(),
      onSuccess,
      onError
    );
  };

  return (
    <S.OrderFooterContainer>
      <S.OrderFooterWrapper>
        <S.OrderCountAndPrice>
          <S.OrderCountAndPriceWrapper>
            총 수량 : {countAndPrice[0].toLocaleString()}개
          </S.OrderCountAndPriceWrapper>
          <S.OrderCountAndPriceWrapper>
            총 가격 : {countAndPrice[1].toLocaleString()}원
          </S.OrderCountAndPriceWrapper>
        </S.OrderCountAndPrice>
        <S.OrderFooterButton
          onClick={requestPurchase}
          disabled={!countAndPrice[0] || isLoading}
        >
          {isLoading ? "로딩중..." : "주문하기"}
        </S.OrderFooterButton>
      </S.OrderFooterWrapper>
    </S.OrderFooterContainer>
  );
};

export default Footer;
