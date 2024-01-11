import React, { useEffect } from "react";
import * as S from "./style";
import useNavigator from "../../Hooks/useNavigator";

const Error = () => {
  const [navigateToDestination] = useNavigator();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToDestination("/order");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.ErrorPageContainer>
      <S.ErrorPageElementsContainer>
        <span> 주문에 실패하였습니다.</span>
        <span> 다시 시도해주세요.</span>
      </S.ErrorPageElementsContainer>
    </S.ErrorPageContainer>
  );
};

export default Error;
