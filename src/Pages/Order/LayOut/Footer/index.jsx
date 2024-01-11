import React from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { countAndPriceState } from "../../../../GlobalState/countAndPrice";
import OrderButton from "./OrderButton";
import CountAndPrice from "./CountAndPrice";

const Footer = () => {
  const [countAndPrice, setCountAndPrice] = useRecoilState(countAndPriceState);

  return (
    <S.Container>
      <S.Wrapper>
        <CountAndPrice countAndPrice={countAndPrice} />
        <OrderButton
          countAndPrice={countAndPrice}
          setCountAndPrice={setCountAndPrice}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Footer;
