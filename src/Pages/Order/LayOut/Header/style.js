import styled from "@emotion/styled";
import * as color from "../../../../GlobalStyle/color";
import * as orderStyle from "../../style";

// 헤더
export const Container = styled.div`
  position: flex;

  width: ${orderStyle.orderWidth}px;
  height: ${orderStyle.orderHeaderHeight}px;

  background: ${color.black};
  box-shadow: 0px 6px 6px -5px gray;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  margin-left: 10px;
`;

export const LogoIMG = styled.img`
  width: 95px;
  height: 32px;
`;
