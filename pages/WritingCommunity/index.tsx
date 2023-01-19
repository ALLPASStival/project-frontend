import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  Block,
  Category,
  Left,
  OrgBtn,
  Right,
  StyledDiv,
  Table,
} from "../../Style/Community";

//21 자유
const WritingCommunity = () => {
  return (
    <>
      <HeaderBar />
      <Wrapper style={{ width: "100%" }}>
        <Category>글쓰기</Category>
        <Table>
          <Block>
            <Left>제목</Left>
            <Right>제목 넣는 input</Right>
          </Block>
          <Block>
            <Left>작성자</Left>
            <Right>작성자 받아 와서 여기 넣기!</Right>
          </Block>
          <Block style={{ height: "21.3rem" }}>
            <Left>본문</Left>
            <Right>본문 넣는 input</Right>
          </Block>
        </Table>
        <StyledDiv>
          <OrgBtn>글 작성하기</OrgBtn>
        </StyledDiv>
      </Wrapper>
    </>
  );
};

export default WritingCommunity;
