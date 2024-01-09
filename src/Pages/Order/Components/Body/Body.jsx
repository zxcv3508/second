import React from "react";
import { useState, useEffect } from "react";
import * as S from "../../style";
import useNavigator from "../../../../Hooks/useNavigator";
import getAPI from "../../../../API/getAPI";
import SpannigBody from "./SpanningBody";
import BodyList from "./ListBody";

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [navigateToDestination] = useNavigator();

  const onSuccess = (data) => {
    console.log("data", data);
    setIsLoading(false);
    setIsError(false);
    setItemList(data);
  };

  const onError = (error) => {
    console.log("error", error);
    setIsLoading(false);
    setIsError(true);
  };

  useEffect(() => {
    // getAPI("http://localhost:3000/items", onSuccess, onError);
    getAPI("http://172.30.1.98:3000/items", onSuccess, onError);
  }, []);

  if (isError) {
    return (
      <S.OrderBodyContainer>
        <S.OrderBodyWrapper>
          <div
            onClick={() => {
              navigateToDestination("/");
            }}
          >
            테스트 서버와 통신이 안되네요! 저를 눌러서 홈으로 다녀와 볼까요..?
          </div>
        </S.OrderBodyWrapper>
      </S.OrderBodyContainer>
    );
  }

  return (
    <S.OrderBodyContainer>
      <S.OrderBodyWrapper>
        {isLoading ? <SpannigBody /> : <BodyList itemList={itemList} />}
      </S.OrderBodyWrapper>
    </S.OrderBodyContainer>
  );
};

export default Body;
