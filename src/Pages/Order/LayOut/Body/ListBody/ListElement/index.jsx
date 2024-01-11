import React from "react";
import * as S from "./style";
import * as color from "../../../../../../GlobalStyle/color";
import Counter from "./Counter";

const ListBodyElement = React.memo(
  ({ item, count, onSetShoppingCart, onSetCountAndPrice }) => {
    return (
      <S.Container
        style={{
          background: `${count > 0 ? color.tenPercentThemeColor : color.white}`,
        }}
      >
        <S.Image />
        <S.Wrapper>
          <S.FisrtLine>
            <S.Name>{item.name}</S.Name>
            {item.event === 1 && <S.Event>이벤트</S.Event>}
          </S.FisrtLine>

          <S.SecondLine>
            <Counter
              item={item}
              count={count}
              onSetShoppingCart={onSetShoppingCart}
              onSetCountAndPrice={onSetCountAndPrice}
            />
            <S.Price>{item.price.toLocaleString()}원</S.Price>
          </S.SecondLine>
        </S.Wrapper>
      </S.Container>
    );
  }
);

export default ListBodyElement;
