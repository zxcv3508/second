import React from "react";
import * as S from "./style";

// 상위 페이지에서 받아온 전역 상태 countAndPrice로 현재 개수와 가격 표시
const CountAndPrice = ({ countAndPrice }) => {
  return (
    <S.Container>
      <S.Wrapper>총 수량 : {countAndPrice[0].toLocaleString()}개</S.Wrapper>
      <S.Wrapper>총 가격 : {countAndPrice[1].toLocaleString()}원</S.Wrapper>
    </S.Container>
  );
};

export default CountAndPrice;
