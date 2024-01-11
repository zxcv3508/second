import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../../../GlobalState/shoppingCart";
import getAPI from "../../../../API/getAPI";
import SpannigBody from "./SpanningBody";
import ListBody from "./ListBody";

const Body = () => {
  const getURL = process.env.REACT_APP_NOTION_TOKEN
    ? process.env.REACT_APP_NOTION_TOKEN
    : "http://localhost:3001/items";
  const [isLoading, setIsLoading] = useState(true);
  const [itemList, setItemList] = useState([]);
  const setShoppingCart = useSetRecoilState(shoppingCartState);
  const navigate = useNavigate();

  const initShoppingCart = (itemList) => {
    var tmpShoppingCart = new Map();

    itemList.map((item) => {
      tmpShoppingCart.set(item.id, 0);
    });
    setShoppingCart(tmpShoppingCart);
  };

  const onSuccess = (data) => {
    setIsLoading(false);
    setItemList(data);
    initShoppingCart(data);
  };

  const onError = (error) => {
    setIsLoading(false);
    alert(`server error:\n${error}`);
    navigate("/");
  };

  useEffect(() => {
    getAPI(getURL, onSuccess, onError);
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        {isLoading ? <SpannigBody /> : <ListBody itemList={itemList} />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Body;
