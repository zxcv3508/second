import React from "react";
import * as S from "./style";
import useNavigator from "../../Hooks/useNavigator";

const OrderButton = () => {
  const [navigateToDestination] = useNavigator("/order");
  const redirectOderPadge = () => {
    navigateToDestination();
  };

  return (
    <S.OrderButton onClick={redirectOderPadge}>주문하러 가기</S.OrderButton>
  );
};

export default OrderButton;
