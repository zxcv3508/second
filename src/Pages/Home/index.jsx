import React from "react";
import * as S from "./style";
import OrderButton from "./OrderButton";

const Home = () => {
  return (
    <S.HomePageContainer>
      <S.HomePageElementsContainer>
        <S.LogoIMG src="/img/logo-black-medium.png" />
        <OrderButton />
      </S.HomePageElementsContainer>
    </S.HomePageContainer>
  );
};

export default Home;
