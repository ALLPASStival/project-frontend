import React, { useCallback, useEffect, useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  Block,
  Left,
  OrgBtn,
  BlockInPut,
  StyledDiv,
  CommunityContainer,
  Form,
} from "../WritingCommunity/styles";
import { Category, Right, SearchBox } from "../../Style/Community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import useInput from "@hooks/useInput";
import { postReview } from "../../actions/Community";
import { getUserInfo } from "../../actions/UserAPI";
//22 후기
const WritingReview = () => {
  const dispatch = useAppDispatch();

  const [articleContent, onChangeArticleContent, setArticleContent] =
    useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [writer, onChangeWriter, setwriter] = useInput("");
  const [nickname, setNickname] = useState("");
  const festivalName = "삼척맹방유채꽃행사";

  const onSubmitReview = useCallback(
    (e: any) => {
      e.preventDefault();

      dispatch(postReview({ articleContent, festivalName, title })).catch(
        (error) => {
          alert(error.err);
        }
      );
    },
    [articleContent, title, festivalName]
  );

  // useEffect(() => {
  //   dispatch(getUserInfo(0));
  //   if (state.user.resultCode == "SUCCESS") {
  //     console.log("State", state);
  //     console.log("State", state.user.result);
  //
  //     userInfo = state.user.result;
  //     console.log(userInfo);
  //     setNickname(userInfo.nickname);
  //     setEmail(userInfo.email);
  //   }
  // }, [state.user.resultCode]);

  const state = useAppSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getUserInfo(0));
  //   if (state.user.resultCode == "SUCCESS") {
  //     console.log("State", state);
  //     console.log("State", state.user.result);
  //
  //     userInfo = state.user.result;
  //     console.log(userInfo);
  //     setNickname(userInfo.nickname);
  //     setEmail(userInfo.email);
  //   }
  // }, [state.user.resultCode]);

  return (
    <>
      <HeaderBar />
      <Wrapper style={{ width: "100%" }}>
        <Category>후기 쓰기</Category>
        <Form onSubmit={onSubmitReview}>
          <CommunityContainer>
            <Block>
              <Left>제목</Left>
              <BlockInPut
                type="text"
                id="id"
                name="id"
                value={title}
                onChange={onChangeTitle}
                placeholder="제목을 입력해주세요"
              />
            </Block>
            <Block>
              <Left>작성자</Left>
              <BlockInPut
                type="text"
                id="id"
                name="id"
                value={writer}
                onChange={onChangeWriter}
                placeholder="작성자"
              />
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
            <Block style={{ height: "21.3rem" }}>
              <Left>본문</Left>
              <BlockInPut
                type="text"
                id="id"
                name="id"
                value={articleContent}
                onChange={onChangeArticleContent}
                placeholder="본문을 입력해주세요"
              />
            </Block>
          </CommunityContainer>
          <StyledDiv>
            <OrgBtn>글 작성하기</OrgBtn>
          </StyledDiv>
        </Form>
      </Wrapper>
    </>
  );
};

export default WritingReview;
