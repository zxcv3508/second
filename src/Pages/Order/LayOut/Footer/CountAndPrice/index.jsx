import React from "react";
import * as S from "./style";

const CountAndPrice = ({ countAndPrice }) => {
  return (
    <S.Container>
      <S.Wrapper>총 수량 : {countAndPrice[0].toLocaleString()}개</S.Wrapper>
      <S.Wrapper>총 가격 : {countAndPrice[1].toLocaleString()}원</S.Wrapper>
    </S.Container>
  );
};

export default CountAndPrice;
