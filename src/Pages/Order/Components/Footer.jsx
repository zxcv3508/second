import React from "react";
import { useRecoilValue } from "recoil";
import { countAndPriceState } from "../../../GlobalState/countAndPrice";
import * as S from "../style";

const Footer = () => {
  const countAndPrice = useRecoilValue(countAndPriceState);
  return (
    <S.OrderFooterContainer>
      {countAndPrice[0]} {countAndPrice[1]}
    </S.OrderFooterContainer>
  );
};

export default Footer;
