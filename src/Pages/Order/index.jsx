import React from "react";
import * as S from "./style";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
  return (
    <>
      <S.OrderPageContainer>
        <S.OrderPageWrapper>
          <Header />
          <Body />
          <Footer />
        </S.OrderPageWrapper>
      </S.OrderPageContainer>
    </>
  );
};

export default Order;
