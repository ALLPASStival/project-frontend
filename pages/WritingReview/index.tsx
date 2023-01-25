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

  const festivalList = [
    "왕버들기원제",
    "고싸움놀이축제",
    "울산고래축제",
    "굿모닝양림축제",
    "제4회 블랙뮤직페스티벌",
    "처용문화제",
    "영주무섬외나무다리축제",
    "노대 에코 페스티벌",
    "제10회 의정부국제가야금축제",
    "용아생가 어린이축제",
    "봉산조형페스티벌",
    "봉산도자기축제",
    "궁거랑 벚꽃 한마당",
    "동성로축제",
    "봉산도예전",
    "마량포 해넘이.해돋이 축제",
    "삼척맹방유채꽃행사",
    "2021청도반시축제",
  ];

  const [festivalName, setFestival] = useState(festivalList[0]);

  const onChangeFestival = useCallback((e: any) => {
    setFestival(e.target.value);
  }, []);

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
                {/*<SearchBox style={{ width: "26.7rem", height: "4.8rem" }}>*/}
                {/*  <FontAwesomeIcon*/}
                {/*    icon={faSearch}*/}
                {/*    style={{ fontSize: "2.5rem" }}*/}
                {/*  />*/}
                {/*  <input*/}
                {/*    type="text"*/}
                {/*    id="search"*/}
                {/*    name="search"*/}
                {/*    style={{ width: "16rem", height: "4.5rem" }}*/}
                {/*  />*/}
                {/*</SearchBox>*/}
                <select onChange={onChangeFestival} value={festivalName}>
                  {festivalList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
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
