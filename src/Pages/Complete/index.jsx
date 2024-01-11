import React, { useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// setTimeout로 3초 뒤에 주문 페이지로 네비게이트
const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/order");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.CompletePageContainer>
      <S.CompletePageElementsContainer>
        <S.CheckIMG src="/img/CheckFilled.png" />
        주문이 완료되었습니다.
      </S.CompletePageElementsContainer>
    </S.CompletePageContainer>
  );
};

export default Complete;
