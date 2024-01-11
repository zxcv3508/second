import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const redirectHomePadge = () => {
    navigate("/");
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
