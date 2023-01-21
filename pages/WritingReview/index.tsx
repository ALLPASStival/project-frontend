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
} from "../WritingCommunity/styles";
import { Category, Right, SearchBox } from "../../Style/Community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/hooks";
import useInput from "@hooks/useInput";
import { postReview } from "../../actions/Community";
//22 후기
const WritingReview = () => {
  const dispatch = useAppDispatch();

  const [articleContent, onChangeArticleContent, setArticleContent] =
    useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [writer, onChangeWriter, setwriter] = useInput("");
  const festivalId = 2;

  const onSubmitReview = useCallback(
    (e: any) => {
      e.preventDefault();

      dispatch(postReview({ articleContent, festivalId, title })).catch(
        (error) => {
          alert(error.err);
        }
      );
    },
    [articleContent, title, festivalId]
  );

  console.log(articleContent);
  console.log(title);
  console.log(festivalId);

  // useEffect(() => {
  //   dispatch(getReview({}))
  //     .unwrap()
  //     .then((response) => {
  //       console.log("### response: ", response);
  //     })
  //     .catch((error) => {
  //       console.log("### error: ", error);
  //     });
  // }, []);

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
            <Block>
              <Left>별점</Left>
              {/*<Right></Right>*/}
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
