import React, { useEffect } from "react";
import * as S from "./style";
import useNavigator from "../../Hooks/useNavigator";

const Complete = () => {
  const [navigateToDestination] = useNavigator();

  localStorage.removeItem("shoppingCart");
  localStorage.removeItem("countAndPrice");
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateToDestination("/order");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <S.CompletePageContainer>
      <S.CompletePageElementsContainer>
        <S.CheckIMG src="/img/CheckFilled.png" />
        주문이 완료되었습니다.
      </S.CompletePageElementsContainer>
    </S.CompletePageContainer>
  );
};

export default Complete;
