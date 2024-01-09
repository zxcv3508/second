import React from "react";
import * as S from "../../style";
import ListBodyElement from "./ListBodyElement";

const ListBody = ({ itemList }) => {
  return (
    <S.ListBodyContainer>
      {itemList.map((item) => (
        <ListBodyElement key={item.id} item={item} />
      ))}
    </S.ListBodyContainer>
  );
};

export default ListBody;
