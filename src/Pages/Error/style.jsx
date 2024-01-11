import styled from "@emotion/styled";
import * as color from "../../GlobalStyle/color";
import * as font from "../../GlobalStyle/font";

const elementsHeight = 100;

export const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${color.white};
`;

export const ErrorPageElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  height: ${elementsHeight}px;
  top: calc(50% - ${elementsHeight / 2}px);
  ${font.normalBody}
`;
