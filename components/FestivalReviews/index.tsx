import React, { useEffect } from "react";
import {
  MiddleBox,
  Rank,
  RankBox,
  Wrapper,
} from "@components/FestivalReviews/styles";
import { getFestivalReview } from "../../actions/FestivalAPI";
import { useAppDispatch } from "../../redux/hooks";
import { getFree } from "../../actions/Community";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FestivalReviews = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFestivalReview({}))
      .unwrap()
      .then((response) => {
        console.log("### 리뷰 랭킹: ", response);
      })
      .catch((error) => {
        console.log("### error: ", error);
      });
  }, []);

  const FestivalReview = useSelector(
    (state: RootState) => state.festival.festivalReview
  );

  console.log(FestivalReview[0]?.etc);

  return (
    <Wrapper>
      <MiddleBox>Lots of reviews</MiddleBox>
      {FestivalReview &&
        [...Array(FestivalReview?.length)].map((e, ind) => {
          return (
            <RankBox>
              <Rank>
                <img src={FestivalReview[ind]?.etc} alt="" />
              </Rank>
            </RankBox>
          );
        })}
    </Wrapper>
  );
};

export default FestivalReviews;
