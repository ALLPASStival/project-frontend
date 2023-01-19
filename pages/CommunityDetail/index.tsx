import React, { useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  Block,
  Left,
  OrgBtn,
  Right,
  StyledDiv,
  Table,
} from "../../Style/Community";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { P } from "./styles";

const CommunityDetail = () => {
  const [comments, setComments] = useState([]);

  const Comment = comments.map(() => {
    return (
      <Table>
        <Block>
          <Left>작성자</Left>
          <Right>닉네임 받아와서 넣기!</Right>
        </Block>
        <Block>
          <Right colSpan={2}>본문 입력 input</Right>
        </Block>
      </Table>
    );
  });

  return (
    <>
      <HeaderBar />
      <Wrapper>
        {/* 본문 */}
        <Table>
          <Block>
            <Left>작성자</Left>
            <Right>닉네임 받아와서 넣기!</Right>
            <Left>등록일</Left>
            <Right>{/* 오늘 날짜 받아오기 */}</Right>
          </Block>
          <Block>
            <Left>제목</Left>
            <Right colSpan={2}>제목 넣는 input</Right>
            <Right>
              <FontAwesomeIcon icon={faThumbsUp} />
              {/* 좋아요 수  */}
            </Right>
          </Block>
          <Block>
            <Right style={{ height: "18.9rem" }}>
              {/* 본문 넣는 textarea */}
            </Right>
          </Block>
        </Table>
        {/* 댓글 */}
        <P>댓글 [{/* 댓글 수 넣기 */}]</P>
        {Comment}
        {/* 새 댓글 작성 */}
        <P>댓글 달기</P>
        <Table>
          <Block>
            <Left>작성자</Left>
            <Right>닉네임 받아와서 넣기!</Right>
          </Block>
          <Block>
            <Left>본문</Left>
            <Right style={{ height: "9.1rem" }}>본문 넣는 input</Right>
          </Block>
        </Table>
        <StyledDiv>
          <OrgBtn>댓글 달기</OrgBtn>
        </StyledDiv>
      </Wrapper>
    </>
  );
};

export default CommunityDetail;
