import styled from "@emotion/styled";
import * as color from "../../GlobalStyle/color";
import * as font from "../../GlobalStyle/font";

const orderButtonHeight = 88;
const logoIMGHeight = 51;
const elementsMargin = 37;
const elementsHeight = orderButtonHeight + logoIMGHeight + elementsMargin;

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePageElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  height: ${elementsHeight}px;
  top: calc(50% - ${elementsHeight / 2}px);
`;

export const LogoIMG = styled.img`
  width: 150px;
  height: ${logoIMGHeight}px;
`;

export const OrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 172px;
  height: ${orderButtonHeight}px;

  background: ${color.white};
  border-radius: 20px;
  border: 0px;

  font: ${font.normalBody};

  &:hover {
    background-color: ${color.themeColor};
  }
`;
