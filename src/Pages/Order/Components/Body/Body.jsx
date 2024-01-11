import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { shoppingCartState } from "../../../../GlobalState/shoppingCart";
import { countAndPriceState } from "../../../../GlobalState/countAndPrice";
import * as S from "../../style";
import useNavigator from "../../../../Hooks/useNavigator";
import getAPI from "../../../../API/getAPI";
import SpannigBody from "./SpanningBody";
import ListBody from "./ListBody";

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const [countAndPrice, setCountAndPriceState] =
    useRecoilState(countAndPriceState);
  const [navigateToDestination] = useNavigator();

  const initShoppingCart = (itemList) => {
    var tmpShoppingCart = new Map();

    itemList.map((item) => {
      tmpShoppingCart.set(item.id, 0);
    });
    setShoppingCart(tmpShoppingCart);
  };

  const getPrevShoppingInfo = () => {
    const prevShoppingCart = localStorage.getItem("shoppingCart");
    const prevCountAndPrice = localStorage.getItem("countAndPrice");

    if (prevCountAndPrice && prevCountAndPrice) {
      const confirmResult = window.confirm(
        "기존 장바구니 기록이 있습니다.\n가져오시겠습니까?"
      );
      if (confirmResult) {
        setShoppingCart(new Map(JSON.parse(prevShoppingCart)));
        setCountAndPriceState(JSON.parse(prevCountAndPrice));
      } else {
        localStorage.removeItem("shoppingCart");
        localStorage.removeItem("countAndPrice");
      }
    }
  };

  const onSuccess = (data) => {
    setIsLoading(false);
    setIsError(false);
    setItemList(data);
    initShoppingCart(data);
    getPrevShoppingInfo();
  };

  const onError = (error) => {
    setIsLoading(false);
    setIsError(true);
  };

  useEffect(() => {
    getAPI("http://localhost:3000/items", onSuccess, onError);
    // getAPI("http://172.30.1.98:3000/items", onSuccess, onError);
  }, []);

  if (isError) {
    return (
      <S.OrderBodyContainer>
        <S.OrderBodyWrapper>
          서버 에러
          <div
            onClick={() => {
              navigateToDestination("/");
            }}
          >
            홈으로 가기
          </div>
        </S.OrderBodyWrapper>
      </S.OrderBodyContainer>
    );
  }

  return (
    <S.OrderBodyContainer>
      <S.OrderBodyWrapper>
        {isLoading ? <SpannigBody /> : <ListBody itemList={itemList} />}
      </S.OrderBodyWrapper>
    </S.OrderBodyContainer>
  );
};

export default Body;
