import React, { useCallback } from "react";
import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../../../../GlobalState/shoppingCart";
import { countAndPriceState } from "../../../../../GlobalState/countAndPrice";
import ListBodyElement from "./ListElement";

// 렌더링 최적화를 위해 해당 ListBody에서는 전역 상태 전체를 관리하고
// 하위 컴포넌트인 ListBodyElement는 memo로 감싸서 props값이 변경될 경우만 렌더
// useCallback활용해서 props로 넘어갈때 함수가 변경됨을 방지
const ListBody = ({ itemList }) => {
  const shoppingCart = useRecoilValue(shoppingCartState);
  const setShoppingCart = useSetRecoilState(shoppingCartState);
  const setCountAndPrice = useSetRecoilState(countAndPriceState);

  const onSetShoppingCart = useCallback((id, nextCount) => {
    setShoppingCart((prev) => {
      const updatedCart = new Map(prev);
      updatedCart.set(id, nextCount);
      return updatedCart;
    });
  }, []);

  const onSetCountAndPrice = useCallback((isIncrease, itemPrice) => {
    const sign = isIncrease ? 1 : -1;

    setCountAndPrice((prev) => {
      const nextCount = prev[0] + sign;
      const nextPrice = prev[1] + sign * itemPrice;

      return [nextCount, nextPrice];
    });
  }, []);

  return (
    <S.Container>
      {itemList.map((item) => {
        return (
          <ListBodyElement
            key={item.id}
            item={item}
            count={shoppingCart.get(item.id)}
            onSetShoppingCart={onSetShoppingCart}
            onSetCountAndPrice={onSetCountAndPrice}
          />
        );
      })}
    </S.Container>
  );
};

export default ListBody;
