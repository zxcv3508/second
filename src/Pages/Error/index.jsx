import React, { useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// setTimeout로 3초 뒤에 주문 페이지로 네비게이트
const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/order");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.ErrorPageContainer>
      <S.ErrorPageElementsContainer>
        <span> 주문에 실패하였습니다.</span>
        <span> 다시 시도해주세요.</span>
      </S.ErrorPageElementsContainer>
    </S.ErrorPageContainer>
  );
};

export default Error;
