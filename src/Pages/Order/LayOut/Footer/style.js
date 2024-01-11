import styled from "@emotion/styled";
import * as color from "../../../../GlobalStyle/color";
import * as orderStyle from "../../style";

// 푸터
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${orderStyle.orderWidth}px;
  height: ${orderStyle.orderFooterHeight}px;

  background: ${color.white};
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -6px 6px -5px ${color.gray};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: calc(100% - 50px);
  height: calc(100% - 50px);
`;
