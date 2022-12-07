import React from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  BottomSide,
  MiddleSide,
  SearchMain,
  TopHeader,
} from "@pages/Search/styles";

const Search = () => {
  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <SearchMain>
          <TopHeader>축제 찾기</TopHeader>
          <MiddleSide>축제 카테고리</MiddleSide>
          <BottomSide>축제 리스트</BottomSide>
        </SearchMain>
      </Wrapper>
    </>
  );
};

export default Search;
