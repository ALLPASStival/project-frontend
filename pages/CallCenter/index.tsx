import React, { useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivRow } from "../../Style/FlexBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Category } from "./styles";
import { OrgBtn, SearchBox, StyledDiv } from "../../Style/Community";

import GetCommunity from "@components/GetCommunity";
import { TopSearch } from "@pages/Search/styles";
import GetReview from "@components/GetReview";
import GetRecruit from "@components/GetRecruit";
import { Link } from "react-router-dom";
import GetCallCenter from "@components/GetCallCenter";

const CallCenter = () => {
  const [category, setCategory] = useState("자유 게시판");
  // const ClickCategoryBtn = (e: any) => {
  //   const { category } = e.target;
  //   setCategory(category);
  // };
  const selectComponent: any = {
    "자유 게시판": <GetCommunity />,
    "후기 게시판": <GetReview />,
    "구인 게시판": <GetRecruit />,
  };

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
            padding: "5rem 10rem 5rem 10rem",
          }}
        >
          <span style={{ fontSize: "4.5rem", fontWeight: "bold" }}>
            고객 센터
          </span>
          <TopSearch>
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "2.5rem" }} />
            <input type="text" id="search" name="search" />
          </TopSearch>
        </StyledDivRow>
        <StyledDivRow style={{ justifyContent: "space-evenly" }}>
          <Category>FAQ</Category>
        </StyledDivRow>
        <GetCallCenter />
      </Wrapper>
    </>
  );
};

export default CallCenter;
