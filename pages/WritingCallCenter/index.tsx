import React, { useCallback, useEffect } from "react";
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
} from "./styles";
import { Category } from "../../Style/Community";
import { useAppDispatch } from "../../redux/hooks";
import useInput from "@hooks/useInput";
import { postCall, postFree } from "../../actions/Community";

//21 자유
const WritingCallCenter = () => {
  const dispatch = useAppDispatch();

  const [articleContent, onChangeArticleContent, setArticleContent] =
    useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [writer, onChangeWriter, setwriter] = useInput("");

  const onSubmitCallCenter = useCallback(
    (e: any) => {
      e.preventDefault();

      dispatch(postCall({ articleContent, title })).catch((error) => {
        alert(error.err);
      });
    },
    [articleContent, title]
  );

  return (
    <>
      <HeaderBar />
      <Wrapper style={{ width: "100%" }}>
        <Category>고객센터 글쓰기</Category>
        <Form onSubmit={onSubmitCallCenter}>
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
                placeholder="야무지조"
              />
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
            <OrgBtn type="submit">글 작성하기</OrgBtn>
          </StyledDiv>
        </Form>
      </Wrapper>
    </>
  );
};

export default WritingCallCenter;
