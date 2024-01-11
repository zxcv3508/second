import React from "react";
import * as S from "../../style";
import * as color from "../../../../GlobalStyle/color";

const ListBodyElement = React.memo(
  ({ item, count, onSetShoppingCart, onSetCountAndPrice }) => {
    const limitCount = 999;

    console.log("item", item);
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
      <S.ListBodyElementContainer
        style={{
          background: `${count > 0 ? color.tenPercentThemeColor : color.white}`,
        }}
      >
        <S.ListBodyElementImg />
        <S.ListBodyElementWrapper>
          <S.ListBodyElementFisrtLine>
            <S.ListBodyElementName>{item.name}</S.ListBodyElementName>
            {item.event === 1 && (
              <S.ListBodyElementEvent>이벤트</S.ListBodyElementEvent>
            )}
          </S.ListBodyElementFisrtLine>

          <S.ListBodyElementSecondLine>
            <S.ListBodyElementCountContainer>
              <S.ListBodyElementCountWrapper onClick={decreaseItemCount}>
                -
              </S.ListBodyElementCountWrapper>
              <S.ListBodyElementCountWrapper>
                {count}
              </S.ListBodyElementCountWrapper>
              <S.ListBodyElementCountWrapper onClick={increaseItemCount}>
                +
              </S.ListBodyElementCountWrapper>
            </S.ListBodyElementCountContainer>
            <S.ListBodyElementPrice>
              {item.price.toLocaleString()}원
            </S.ListBodyElementPrice>
          </S.ListBodyElementSecondLine>
        </S.ListBodyElementWrapper>
      </S.ListBodyElementContainer>
    );
  }
);

export default ListBodyElement;
