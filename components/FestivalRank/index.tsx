import React from "react";
import {
  Rank,
  RankBox,
  TopHeader,
  TopLeft,
  TopRight,
  Wrapper,
} from "@components/FestivalRank/styles";

const FestivalRank = () => {
  return (
    <Wrapper>
      <TopHeader>
        <TopLeft>축제 순위</TopLeft>
        <TopRight>전체 보기</TopRight>
      </TopHeader>
      <Rank>
        <img
          src={
            "http://imgnews.naver.net/image/5364/2021/08/10/0000530204_001_20210810160832237.jpg"
          }
          alt=""
        />
        <RankBox>1</RankBox>
        <RankBox>3</RankBox>
        <RankBox>3</RankBox>
        <RankBox>4</RankBox>
      </Rank>
    </Wrapper>
  );
};

export default FestivalRank;
