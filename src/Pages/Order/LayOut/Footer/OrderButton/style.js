import styled from "@emotion/styled";
import * as color from "../../../../../GlobalStyle/color";
import * as font from "../../../../../GlobalStyle/font";

export const Button = styled.button`
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
