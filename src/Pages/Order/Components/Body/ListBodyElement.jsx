import React from "react";
import * as S from "../../style";
import * as color from "../../../../GlobalStyle/color";

const ListBodyElement = ({ item }) => {
  return (
    <S.ListBodyElementContainer
      style={{ background: `${item ? color.tenPercentThemeColor : color.white}` }}
    >
      <S.ListBodyElementImg />
      <S.ListBodyElementWrapper>
        <div>
          {item.name} {item.event}
        </div>
        <div> {item.price}원</div>
      </S.ListBodyElementWrapper>
    </S.ListBodyElementContainer>
  );
};

export default ListBodyElement;
