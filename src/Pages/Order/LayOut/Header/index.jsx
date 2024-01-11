import React from "react";
import * as S from "./style";
import useNavigator from "../../../../Hooks/useNavigator";

const Header = () => {
  const [navigateToDestination] = useNavigator();

  const redirectHomePadge = () => {
    navigateToDestination("/");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoIMG
          src="/img/logo-black-small.png"
          onClick={redirectHomePadge}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Header;
