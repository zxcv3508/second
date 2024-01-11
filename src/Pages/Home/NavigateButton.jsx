import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

// 클릭시 주문 페이지로 네비게이트
const NavigateButton = () => {
  const navigate = useNavigate();

  const redirectOderPadge = () => {
    navigate("/order");
  };

  return (
    <S.OrderButton onClick={redirectOderPadge}>주문하러 가기</S.OrderButton>
  );
};

export default NavigateButton;
