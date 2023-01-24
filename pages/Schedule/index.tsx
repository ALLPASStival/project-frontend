import HeaderBar from "@components/HeaderBar";
import { faPencil, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";
import { Wrapper } from "../../Style/Wrapper";
import { getFesInfo } from "./infoSlice";
import { Calendar, DateBox, DetailInfo, Info, OrangeBtn, Span } from "./styles";

const Schedule = () => {
  const [dates, setDates] = useState([
    { date: 1, fests: ["거제 섬꽃축제", "불꽃 축제"] },
    { date: 2, fests: [] },
    { date: 3, fests: [] },
    { date: 4, fests: [] },
    { date: 5, fests: [] },
    { date: 6, fests: [] },
    { date: 7, fests: [] },
    { date: 8, fests: [] },
    { date: 9, fests: [] },
    { date: 10, fests: [] },
    { date: 11, fests: [] },
    { date: 12, fests: [] },
    { date: 13, fests: [] },
    { date: 14, fests: [] },
    { date: 15, fests: [] },
    { date: 16, fests: [] },
    { date: 17, fests: [] },
    { date: 18, fests: [] },
    { date: 19, fests: [] },
    { date: 20, fests: [] },
    { date: 21, fests: [] },
    { date: 22, fests: [] },
    { date: 23, fests: [] },
    { date: 24, fests: [] },
    { date: 25, fests: [] },
    { date: 26, fests: [] },
    { date: 27, fests: [] },
    { date: 28, fests: [] },
    { date: 29, fests: [] },
    { date: 30, fests: [] },
    { date: 31, fests: [] },
  ]);

  const [fesId, setFesId] = useState(0);

  const [festInfo, setFestInfo] = useState({
    festivalName: "거제 섬꽃축제",
    holdingVenue: "거제시 농업개발원",
    startDate: "2023-01-01",
    finishDate: "2023-01-06",
    hostInst: "거제시농업기술센터 농업관광과",
    hostOrg: "거제시농업기술센터 농업관광과",
    telNum: "",
    homepAddr: "",
    streetAddr: "경상남도 거제시 거제면 거제남서로 3577",
    content:
      '"꽃, 문화, 사람이 어우러지는 가을꽃 축제이다. 주행사로는 국화분재 전시, 힐링허브랜드, 가을꽃 조형물 전시, 테마꽃동산, 국화소품, 실증시험온실, 화목류시험포, 난지과수원 등이 있다."',
    view: null,
    etc: "http://post.phinf.naver.net/MjAxNzEwMjVfMjcw/MDAxNTA4ODkxNzg2MzIw.O816cMDmukGIQctaa-Yclm-R-5sPOoSpWuuxh1B_Ywwg.NxQy15_31cIWdShrmynJRd-jwzPB3k2wnaubD0UWGzwg.JPEG/IVbZikWx40GTJcsdDBD3-FDbqUAc.jpg",
    author: null,
    likes: 0,
    review: 0,
  });
  const [likes, setLikes] = useState(festInfo.likes);

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getFesInfo(fesId));
  }, [fesId]);

  // 현재 날짜 구하기
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  const monthEn = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  let monthWord = monthEn[month];

  const calendar = dates.map((d: any) => {
    let festivals = d.fests;
    const list = festivals.map((f: string) => {
      return (
        <li
          style={{
            fontSize: "2rem",
            listStyleType: "disc",
            listStylePosition: "outside",
            marginBottom: "1.1rem",
            fontWeight: "normal",
          }}
        >
          {f}
        </li>
      );
    });
    return (
      <DateBox id={d.date.toString()}>
        <span>{d.date}</span>
        {/* 오류 수정 필요 */}
        <ul
          style={{
            margin: 0,
            padding: 0,
            marginTop: "1.1rem",
            marginLeft: "1rem",
          }}
        >
          {list}
        </ul>
      </DateBox>
    );
  });

  const onClickLike = () => {
    console.log("좋아요!!");
    setLikes((prev) => prev + 1);
  };

  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          marginTop: 0,
          paddingTop: "13%",
          paddingBottom: "10%",
          paddingLeft: "7rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledDivRow
          style={{
            width: "40%",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginBottom: "3%",
            paddingRight: "60%",
          }}
        >
          <StyledDivColumn>
            <Span>축제 일정</Span>
            <Span style={{ fontSize: "2.5rem" }}>
              {year}년 {month + 1}월
            </Span>
          </StyledDivColumn>
          <Span style={{ fontSize: "4rem" }}>{monthWord}</Span>
        </StyledDivRow>
        <StyledDivRow style={{ alignItems: "flex-start" }}>
          <Calendar>{calendar}</Calendar>
          <DetailInfo>
            <Info style={{ fontSize: "3rem", fontWeight: "bold" }}>
              {festInfo.festivalName}
            </Info>
            <img
              src={festInfo.etc}
              style={{
                width: "30rem",
                height: "33.8rem",
                borderRadius: "3rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            />
            <div style={{ marginBottom: "3rem" }}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ fontSize: "2.5rem", marginRight: "0.7rem" }}
              />
              <Info style={{ margin: "1rem" }}>{likes}</Info>
              <FontAwesomeIcon
                icon={faPencil}
                style={{
                  fontSize: "2.5rem",
                  marginRight: "0.7rem",
                  marginLeft: "1rem",
                }}
              />
              <Info style={{ margin: "1rem" }}>{festInfo.review}</Info>
            </div>
            <StyledDivColumn>
              <Info>
                <b>장소 |</b> {festInfo.holdingVenue}
              </Info>
              <Info>
                <b>축제 기간 |</b> {festInfo.startDate}~{festInfo.finishDate}
              </Info>
            </StyledDivColumn>
            <StyledDivRow style={{ marginTop: "3rem" }}>
              <OrangeBtn onClick={onClickLike}>좋아요</OrangeBtn>
              <OrangeBtn>후기쓰기</OrangeBtn>
            </StyledDivRow>
          </DetailInfo>
        </StyledDivRow>
      </Wrapper>
    </>
  );
};

export default Schedule;
