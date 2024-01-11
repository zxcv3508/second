import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { shoppingCartState } from "../../../../GlobalState/shoppingCart";
import getAPI from "../../../../API/getAPI";
import SpannigBody from "./SpanningBody";
import ListBody from "./ListBody";

// 바디 접근시 GET 요청 보내어 전역 상태 shoppingCart 초기화, 아이템 정보 초기화
// 요청 실패시 경고와 함께 루트로 네비게이트
// 로딩중인지 판단 후 대기화면 또는 리스트화면으로 바꿈
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
