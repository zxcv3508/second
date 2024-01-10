import styled from "@emotion/styled";
import * as color from "../../GlobalStyle/color";
import * as font from "../../GlobalStyle/font";
// import * as font from "../../GlobalStyle/font";

const orderWidth = 350;
const orderHeaderHeight = 57;
const orderFooterHeight = 170;
const bodyPadding = 10;
const listBodyElemetSize = 62;

// 페이지
export const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${color.white};
  height: 100%;
  width: ${orderWidth}px;
`;

// 헤더
export const OrderHeaderContainer = styled.div`
  position: flex;
  background: ${color.black};
  width: ${orderWidth}px;
  height: ${orderHeaderHeight}px;
  box-shadow: 0px 6px 6px -5px gray;
`;

export const OrderHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  margin-left: 10px;
`;

export const OrderHeaderLogoIMG = styled.img`
  width: 95px;
  height: 32px;
`;

// 바디
export const OrderBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(
    100% - ${orderHeaderHeight + orderFooterHeight}px
  );
  
  overflow-x: hidden;
  overflow-y auto;
`;

export const OrderBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  width: ${orderWidth}px;
  // padding: ${bodyPadding}px;

  border: solid 1px;
`;

// 대기 바디
export const SpannigBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 50px;
  position: relative;
  top: calc(50% - 25px);
`;

// 리스트 바디
export const ListBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

// 리스트 바디 요소
export const ListBodyElementContainer = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  height: 100%;
  margin: 10px;

  border-radius: 10px;
  border: solid 1px ${color.gray};
`;

export const ListBodyElementImg = styled.div`
  width: ${listBodyElemetSize}px;
  height: ${listBodyElemetSize}px;
  margin: 10px 10px 10px 10px;
  background: ${color.gray};
`;

export const ListBodyElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: ${listBodyElemetSize}px;
  width: calc(90% - ${listBodyElemetSize}px);
  margin-left: 5px;
  margin-right: 10px;

  // align-items: center;
`;

export const ListBodyElementFisrtLine = styled.div`
  display: flex;
  width: 100%;
`;
export const ListBodyElementName = styled.div`
  ${font.normalBody}
`;

export const ListBodyElementEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 53px;
  height: 23px;
  margin-left: 15px;

  background-color: ${color.themeColor};
  border-radius: 10px;

  ${font.smallNormalBody};
  color: ${color.white};
`;

export const ListBodyElementSecondLine = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const ListBodyElementCountContainer = styled.div`
  display: flex;
`;

export const ListBodyElementCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 23px;
`;

export const ListBodyElementPrice = styled.div`
  ${font.normalBody}
`;

// 푸터
export const OrderFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${color.white};
  width: ${orderWidth}px;
  height: ${orderFooterHeight}px;

  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -6px 6px -5px ${color.gray};
`;

export const OrderFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(100% - 50px);
  height: calc(100% - 50px);
  // border: solid 1px black;
`;

export const OrderCountAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  width: 100%;
  height: 52px;
  // border: solid 1px black;
`;
export const OrderCountAndPriceWrapper = styled.div`
  ${font.normalBody}
  text-align: right;
`;

export const OrderFooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  color: ${color.white};
  background-color: ${color.black};
  border: none;

  ${font.normalBody};

  :disabled {
    background: ${color.gray};
    color: ${color.white};
  }
`;
