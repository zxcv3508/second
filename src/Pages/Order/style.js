import styled from "@emotion/styled";
import * as color from "../../GlobalStyle/color";

export const orderWidth = 350;
export const orderHeaderHeight = 57;
export const orderFooterHeight = 170;
export const listBodyElemetSize = 62;

// 페이지
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: ${orderWidth}px;

  background: ${color.white};
`;
