import React, { useCallback, useEffect, useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  Block,
  Left,
  OrgBtn,
  Right,
  StyledDiv,
  Table,
  CommentTable,
  CommentContainer,
} from "../../Style/Community";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoodOrgBtn, P } from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { getCommentList, postComment } from "../../actions/Comment";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router";
import { getEach, postFree, postGood } from "../../actions/Community";
import {
  BlockInPut,
  CommunityContainer,
  CommnunityBlock,
  CommnunityLeft,
  CommnunityRight,
  Form,
} from "@pages/WritingCommunity/styles";
import useInput from "@hooks/useInput";
import { Root } from "react-dom/client";

const CommunityDetail = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [comment, onChangeComment, setComment] = useInput("");

  //상세 글 내용 불러오기
  useEffect(() => {
    dispatch(getEach(postId))
      .unwrap()
      .then((response) => {
        console.log("### 글 내용: ", response);
      })
      .catch((error) => {
        console.log("### 글 내용 에러: ", error);
      });
  }, [postId]);

  useEffect(() => {
    dispatch(getCommentList({ postId }))
      .unwrap()
      .then((response) => {
        console.log("### 댓글리스트: ", response);
      })
      .catch((error) => {
        console.log("### 댓글리스트 에러: ", error);
      });
  }, [postId]);

  //상세 페이지 글 내용
  const Each = useSelector((state: RootState) => state.community.content);

  //댓글 리스트
  const CommentList = useSelector((state: RootState) => state.comment.result);

  const onSubmitComment = useCallback(
    (e: any) => {
      dispatch(postComment({ comment, postId })).catch((error) => {
        alert(error.err);
      });
    },
    [comment]
  );

  const onSubmitGood = useCallback(
    (e: any) => {
      dispatch(postGood(postId)).catch((error) => {
        alert(error.err);
      });
    },
    [postId]
  );

  return (
    <>
      <HeaderBar />
      <Wrapper>
        <Table>
          <Block>
            <Left>작성자</Left>
            <Right>{Each?.result?.userName}</Right>
            <Left>등록일</Left>
            <Right>{Each?.result?.createdAt}</Right>
          </Block>
          <Block>
            <Left>제목</Left>
            <Right colSpan={2}>{Each?.result?.title}</Right>
            <Right>
              <FontAwesomeIcon
                style={{ marginRight: "1.5rem" }}
                icon={faThumbsUp}
              />
              {Each?.result?.like}
            </Right>
          </Block>
          <Block>
            <Right style={{ height: "18.9rem" }}>
              {Each?.result?.articleContent}
            </Right>
          </Block>
        </Table>

        <Form onSubmit={onSubmitGood}>
          <StyledDiv>
            <GoodOrgBtn type="submit">좋아요 누르기</GoodOrgBtn>
          </StyledDiv>
        </Form>

        <P>댓글 [{CommentList?.length}]</P>
        <CommentContainer>
          {CommentList &&
            [...Array(CommentList?.length)].map((e, ind) => {
              return (
                <>
                  <CommentTable>
                    <Block>
                      <Left>야무지조</Left>
                      <Right>{CommentList[ind]?.userName}</Right>
                    </Block>
                    <Block>
                      <Right colSpan={2}>{CommentList[ind]?.comment}</Right>
                    </Block>
                  </CommentTable>
                </>
              );
            })}
        </CommentContainer>

        <P>댓글 달기</P>
        <Form onSubmit={onSubmitComment}>
          <CommunityContainer>
            <CommnunityBlock>
              <CommnunityLeft>야무지조</CommnunityLeft>
              <CommnunityRight>야무지조</CommnunityRight>
            </CommnunityBlock>
            <Block style={{ height: "10.3rem" }}>
              <Left>본문</Left>
              <BlockInPut
                type="text"
                id="id"
                name="id"
                value={comment}
                onChange={onChangeComment}
                placeholder="내용을 입력하세요"
              />
            </Block>
          </CommunityContainer>
          <StyledDiv>
            <OrgBtn type="submit">댓글 달기</OrgBtn>
          </StyledDiv>
        </Form>
      </Wrapper>
    </>
  );
};

export default CommunityDetail;
