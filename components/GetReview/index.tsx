import React, { useEffect } from "react";
import { Th } from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { getFree, getReview } from "../../actions/Community";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ContentBox, EachContent } from "@components/GetCommunity/styles";
import { Link } from "react-router-dom";
import { OrgBtn, StyledDiv } from "../../Style/Community";

const GetReview = () => {
  const dispatch = useAppDispatch();

  const review = useSelector((state: RootState) => state.community.content);
  useEffect(() => {
    if (review) {
      dispatch(getReview({}))
        .unwrap()
        .then((response) => {
          console.log("### 후기글: ", response);
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
        {review &&
          [...Array(review?.length)].map((e, ind) => {
            const id = review[ind].postId;
            return (
              <Link
                to={`/communitydetail/${id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={ind}
              >
                <EachContent>
                  <div>{review[ind].postId}</div>
                  <div>{review[ind].title}</div>
                  <div>{review[ind].userName}</div>
                  <div>{review[ind].createdAt}</div>
                  <div>{review[ind].like}</div>
                </EachContent>
              </Link>
            );
          })}
      </ContentBox>
      <StyledDiv>
        <Link to="/writingreview">
          <OrgBtn>글쓰기</OrgBtn>
        </Link>
      </StyledDiv>
    </>
  );
};

export default GetReview;
