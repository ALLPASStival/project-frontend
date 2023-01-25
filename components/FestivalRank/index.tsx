import React, { useEffect } from "react";
import {
  Rank,
  RankBox,
  TopHeader,
  TopLeft,
  TopRight,
  Wrapper,
} from "@components/FestivalRank/styles";
import { useAppDispatch } from "../../redux/hooks";
import { getFestivalGood, getFestivalReview } from "../../actions/FestivalAPI";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { MiddleBox } from "@components/FestivalReviews/styles";

const FestivalRank = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFestivalGood({}))
      .unwrap()
      .then((response) => {
        console.log("### 좋아요 랭킹: ", response);
      })
      .catch((error) => {
        console.log("### error: ", error);
      });
  }, []);

  const FestivalGood = useSelector(
    (state: RootState) => state.festival.festivalGood
  );
  return (
    <Wrapper>
      {/*<TopHeader>*/}
      {/*  <TopLeft>축제 순위</TopLeft>*/}
      {/*  <TopRight>전체 보기</TopRight>*/}
      {/*</TopHeader>*/}
      <MiddleBox>
        <div />
        <span>Lots of likes</span>
        <div />
      </MiddleBox>
      <Rank>
        {FestivalGood &&
          [...Array(FestivalGood?.length)].map((e, ind) => {
            return <img src={FestivalGood[ind]?.etc} alt="" />;
          })}
      </Rank>
    </Wrapper>
  );
};

export default FestivalRank;
