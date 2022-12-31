import React from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
import {
  BottomSide,
  MiddleSide,
  SearchMain,
  TopHeader,
} from "@pages/Search/styles";

const Community = () => {
  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <div>커뮤니티</div>
      </Wrapper>
    </>
  );
};

export default Community;
