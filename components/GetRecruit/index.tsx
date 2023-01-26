import React, { useEffect } from "react";
import { Th } from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { getFree, getRecruit } from "../../actions/Community";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ContentBox, EachContent } from "@components/GetCommunity/styles";
import { Link } from "react-router-dom";
import { OrgBtn, StyledDiv } from "../../Style/Community";

const GetRecruit = () => {
  const dispatch = useAppDispatch();

  const recruit = useSelector((state: RootState) => state.community.content);

  useEffect(() => {
    if (recruit) {
      dispatch(getRecruit({}))
        .unwrap()
        .then((response) => {
          console.log("### 구인글: ", response);
        })
        .catch((error) => {
          console.log("### error: ", error);
        });
    }
  }, [dispatch]);

  return (
    <>
      <table style={{ marginTop: "2.2rem" }}>
        <thead>
          <Th style={{ width: "10%" }}>NO</Th>
          <Th style={{ width: "40%" }}>제목</Th>
          <Th style={{ width: "20%" }}>글쓴이</Th>
          <Th style={{ width: "15%" }}>작성시간</Th>
          <Th style={{ width: "15%" }}>좋아요</Th>
        </thead>
      </table>
      <ContentBox>
        {recruit &&
          [...Array(recruit?.length)].map((e, ind) => {
            const id = recruit[ind].postId;
            return (
              <Link
                to={`/communitydetail/${id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={ind}
              >
                <EachContent>
                  <div>{recruit[ind].postId}</div>
                  <div>{recruit[ind].title}</div>
                  <div>{recruit[ind].userName}</div>
                  <div>{recruit[ind].createdAt}</div>
                  <div>{recruit[ind].like}</div>
                </EachContent>
              </Link>
            );
          })}
      </ContentBox>
      <StyledDiv>
        <Link to="/writingrecruit">
          <OrgBtn>글쓰기</OrgBtn>
        </Link>
      </StyledDiv>
    </>
  );
};

export default GetRecruit;
