import styled from "@emotion/styled";
import * as color from "../../../../../../GlobalStyle/color";
import * as font from "../../../../../../GlobalStyle/font";
import * as orderStyle from "../../../../style";

// 리스트 바디 요소
export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  height: 100%;
  margin: 10px;

  border-radius: 10px;
  border: solid 1px ${color.gray};
`;

export const Image = styled.div`
  width: ${orderStyle.listBodyElemetSize}px;
  height: ${orderStyle.listBodyElemetSize}px;
  margin: 10px 10px 10px 10px;

  background: ${color.gray};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: ${orderStyle.listBodyElemetSize}px;
  width: calc(90% - ${orderStyle.listBodyElemetSize}px);
  margin-left: 5px;
  margin-right: 10px;
`;

export const FisrtLine = styled.div`
  display: flex;

  width: 100%;
`;

export const Name = styled.div`
  ${font.normalBody}
`;

export const Event = styled.div`
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

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Price = styled.div`
  ${font.normalBody}
`;
