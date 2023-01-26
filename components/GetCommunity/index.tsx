import React, { useEffect } from "react";
import { ContentBox, EachContent, Th } from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { getFree } from "../../actions/Community";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { getEachFestival } from "../../actions/FestivalAPI";
import { OrgBtn, StyledDiv } from "../../Style/Community";

const GetCommunity = () => {
  const dispatch = useAppDispatch();
  const free = useSelector((state: RootState) => state.community.content);
  useEffect(() => {
    if (free) {
      dispatch(getFree({}))
        .unwrap()
        .then((response) => {
          console.log("### 자유글: ", response);
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
        {free &&
          [...Array(free?.length)].map((e, ind) => {
            const id = free[ind].postId;
            return (
              <Link
                to={`/communitydetail/${id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={ind}
              >
                <EachContent>
                  <div>{free[ind].postId}</div>
                  <div>{free[ind].title}</div>
                  <div>{free[ind].userName}</div>
                  <div>{free[ind].createdAt}</div>
                  <div>{free[ind].like}</div>
                </EachContent>
              </Link>
            );
          })}
      </ContentBox>
      <StyledDiv>
        <Link to="/writingcommunity">
          <OrgBtn>글쓰기</OrgBtn>
        </Link>
      </StyledDiv>
    </>
  );
};

export default GetCommunity;
