import React, { useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivRow } from "../../Style/FlexBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Category } from "./style";
import { OrgBtn, SearchBox, StyledDiv } from "../../Style/Community";

import GetCommunity from "@components/GetCommunity";

const Community = () => {
  const [cat, setCat] = useState("커뮤니티");

  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <StyledDivRow
          style={{
            justifyContent: "space-between",
            padding: "0rem 10rem 3rem 10rem",
          }}
        >
          <span style={{ fontSize: "4.5rem", fontWeight: "bold" }}>{cat}</span>
          <SearchBox>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "2.5rem" }} />
            <input type="text" id="search" name="search" />
          </SearchBox>
        </StyledDivRow>
        <StyledDivRow style={{ justifyContent: "space-evenly" }}>
          <Category
            onClick={() => setCat("커뮤니티")}
            className={`${cat == "커뮤니티" ? "select" : ""}`}
          >
            자유게시판
          </Category>
          <Category
            onClick={() => setCat("후기 게시판")}
            className={`${cat == "후기 게시판" ? "select" : ""}`}
          >
            후기게시판
          </Category>
          <Category
            onClick={() => setCat("구인 게시판")}
            className={`${cat == "구인 게시판" ? "select" : ""}`}
          >
            구인게시판
          </Category>
        </StyledDivRow>
        <GetCommunity />
        <StyledDiv>
          <OrgBtn>글쓰기</OrgBtn>
        </StyledDiv>
      </Wrapper>
    </>
  );
};

export default Community;
