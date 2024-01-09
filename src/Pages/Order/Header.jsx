import React from "react";
import * as S from "./style";
import useNavigator from "../../Hooks/useNavigator";

const Header = () => {
  const [navigateToDestination] = useNavigator("/");
  const redirectHomePadge = () => {
    navigateToDestination();
  };

  return (
    <S.OrderHeaderContainer>
      <S.OrderHeaderWrapper>
        <S.OrderHeaderLogoIMG
          src="/img/logo-black-small.png"
          onClick={redirectHomePadge}
        />
      </S.OrderHeaderWrapper>
    </S.OrderHeaderContainer>
  );
};

export default Header;
