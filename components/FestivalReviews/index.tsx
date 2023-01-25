import React, { useEffect } from "react";
import { MiddleBox, Rank, Wrapper } from "@components/FestivalReviews/styles";
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

  return (
    <Wrapper>
      <MiddleBox>Lots of reviews</MiddleBox>
      <Rank>
        {FestivalReview &&
          [...Array(FestivalReview?.length)].map((e, ind) => {
            return <img src={FestivalReview[ind]?.etc} alt="" />;
          })}
      </Rank>
    </Wrapper>
  );
};

export default FestivalReviews;
