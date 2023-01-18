import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  Block,
  Category,
  Left,
  OrgBtn,
  Right,
  SearchBox,
  StyledDiv,
  Table,
} from "../../Style/Community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const WritingReview = () => {
  return (
    <>
      <HeaderBar />
      <Wrapper style={{ width: "100%" }}>
        <Category>후기 쓰기</Category>
        <Table>
          <Block>
            <Left>제목</Left>
            <Right>제목 넣는 input</Right>
          </Block>
          <Block>
            <Left>작성자</Left>
            <Right>작성자 받아 와서 여기 넣기!</Right>
          </Block>
          <Block>
            <Left>축제</Left>
            <Right>
              <SearchBox style={{ width: "26.7rem", height: "4.8rem" }}>
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: "2.5rem" }}
                />
                <input
                  type="text"
                  id="search"
                  name="search"
                  style={{ width: "16rem", height: "4.5rem" }}
                />
              </SearchBox>
            </Right>
          </Block>
          <Block>
            <Left>성별</Left>
            <Right>성별 받아 와서 여기 넣기!</Right>
          </Block>
          <Block>
            <Left>나이</Left>
            <Right>나이 받아 와서 여기 넣기!</Right>
          </Block>
          <Block>
            <Left>별점</Left>
            <Right></Right>
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

export default WritingReview;
