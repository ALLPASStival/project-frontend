import React, { useEffect } from "react";
import { ContentBox, EachContent, Th } from "./styles";
import { useAppDispatch } from "../../redux/hooks";
import { getCallCenter, getFree } from "../../actions/Community";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { OrgBtn, StyledDiv } from "../../Style/Community";

const GetCallCenter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCallCenter({}))
      .unwrap()
      .then((response) => {
        console.log("### 고객센터: ", response);
      })
      .catch((error) => {
        console.log("### error: ", error);
      });
  }, []);

  const call = useSelector((state: RootState) => state.community.call);

  return (
    <>
      <table style={{ marginTop: "2.2rem" }}>
        <thead>
          <Th style={{ width: "10%" }}>NO</Th>
          <Th style={{ width: "40%" }}>제목</Th>
          <Th style={{ width: "20%" }}>글쓴이</Th>
          <Th style={{ width: "15%" }}>작성시간</Th>
          <Th style={{ width: "15%" }}>답변여부</Th>
        </thead>
      </table>
      <ContentBox>
        {call &&
          [...Array(call?.length)].map((e, ind) => {
            const id = call[ind].postId;
            return (
              <Link
                to={`/communitydetail/${id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={ind}
              >
                <EachContent>
                  <div>{call[ind].postId}</div>
                  <div>{call[ind].title}</div>
                  <div>{call[ind].userName}</div>
                  <div>{call[ind].createdAt}</div>
                  <div>{call[ind].state}</div>
                </EachContent>
              </Link>
            );
          })}
      </ContentBox>
      <StyledDiv>
        <Link to="/writingcallcenter">
          <OrgBtn>글쓰기</OrgBtn>
        </Link>
      </StyledDiv>
    </>
  );
};

export default GetCallCenter;
