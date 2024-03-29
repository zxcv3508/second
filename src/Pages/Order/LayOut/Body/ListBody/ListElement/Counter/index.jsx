import React from "react";
import * as S from "./style";

// 음수와 최대 수량 넘어갈 경우를 경고로 알림
const Counter = ({ item, count, onSetShoppingCart, onSetCountAndPrice }) => {
  const limitCount = process.env.REACT_APP_LIMIT_COUNT
    ? process.env.REACT_APP_LIMIT_COUNT
    : 999;

  const increaseItemCount = () => {
    if (count + 1 > limitCount) {
      alert(`주문할 수 있는 최대 수량은 ${limitCount}개 입니다.`);
    } else {
      onSetShoppingCart(item.id, count + 1);
      onSetCountAndPrice(true, item.price);
    }
  };

  const decreaseItemCount = () => {
    if (count - 1 < 0) {
      alert(`수량은 음수가 될 수 없습니다.`);
    } else {
      onSetShoppingCart(item.id, count - 1);
      onSetCountAndPrice(false, item.price);
    }
  };
  return (
    <S.Container>
      <S.Wrapper onClick={decreaseItemCount}>-</S.Wrapper>
      <S.Wrapper>{count}</S.Wrapper>
      <S.Wrapper onClick={increaseItemCount}>+</S.Wrapper>
    </S.Container>
  );
};

export default Counter;
