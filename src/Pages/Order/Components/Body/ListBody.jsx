import React, { useCallback } from "react";
import * as S from "../../style";
import { useRecoilState, useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../../../GlobalState/shoppingCart";
import { countAndPriceState } from "../../../../GlobalState/countAndPrice";
import ListBodyElement from "./ListBodyElement";

const ListBody = ({ itemList }) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const setCountAndPrice = useSetRecoilState(countAndPriceState);

  const onSetShoppingCart = useCallback((id, nextCount) => {
    const updatedCart = new Map(shoppingCart);

    updatedCart.set(id, nextCount);
    setShoppingCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify([...updatedCart]));
  }, []);

  const onSetCountAndPrice = useCallback((id, isIncrease, itemPrice) => {
    const sign = isIncrease ? 1 : -1;

    setCountAndPrice((prev) => {
      const nextCount = prev[0] + sign;
      const nextPrice = prev[1] + sign * itemPrice;

      localStorage.setItem(
        "countAndPrice",
        JSON.stringify([nextCount, nextPrice])
      );
      return [nextCount, nextPrice];
    });
  }, []);

  return (
    <S.ListBodyContainer>
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
    </S.ListBodyContainer>
  );
};

export default ListBody;
