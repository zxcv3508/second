import React from "react";
import * as S from "./style";

const Counter = ({ item, count, onSetShoppingCart, onSetCountAndPrice }) => {
  const limitCount = 999;

  const increaseItemCount = () => {
    if (count + 1 > limitCount) {
      alert(`주문할 수 있는 최대 수량은 ${limitCount}개 입니다.`);
    } else {
      onSetShoppingCart(item.id, count + 1);
      onSetCountAndPrice(item.id, true, item.price);
    }
  };

  const decreaseItemCount = () => {
    if (count - 1 < 0) {
      alert(`수량은 음수가 될 수 없습니다.`);
    } else {
      onSetShoppingCart(item.id, count - 1);
      onSetCountAndPrice(item.id, false, item.price);
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
