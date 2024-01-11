import React from "react";
import * as S from "./style";
import * as color from "../../../../../../GlobalStyle/color";
import Counter from "./Counter";

// 메모로 감싸서 props 값이 변경 안되면 리렌더 하지 않음
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
