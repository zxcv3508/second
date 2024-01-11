import React from "react";
import * as S from "./style";
import NavigateButton from "./NavigateButton";

const Home = () => {
  return (
    <S.HomePageContainer>
      <S.HomePageWrapper>
        <S.LogoIMG src="/img/logo-black-medium.png" />
        <NavigateButton />
      </S.HomePageWrapper>
    </S.HomePageContainer>
  );
};

export default Home;
