import styled from "@emotion/styled";
import * as orderStyle from "../../style";

// 바디
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(
    100% - ${orderStyle.orderHeaderHeight + orderStyle.orderFooterHeight}px
  );
  
  overflow-x: hidden;
  overflow-y auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: ${orderStyle.orderWidth}px;
`;

