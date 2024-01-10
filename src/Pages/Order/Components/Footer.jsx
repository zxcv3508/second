import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { countAndPriceState } from "../../../GlobalState/countAndPrice";
import * as S from "../style";

const Footer = () => {
  const countAndPrice = useRecoilValue(countAndPriceState);
  const [isLoading, setIsLoading] = useState(false);

  const requestPurchase = () => {
    setIsLoading(true);
    
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
