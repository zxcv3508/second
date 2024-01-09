import React from "react";
import * as S from "./style";
import Body from "./Components/Body/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
