import React from "react";
import * as S from "./style";

const OrderButton = () => {
  const redirectOderPadge = () => {
    console.log("on click");
  };

  return (
    <S.OrderButton onClick={redirectOderPadge}>주문하러 가기</S.OrderButton>
  );
};

export default OrderButton;
