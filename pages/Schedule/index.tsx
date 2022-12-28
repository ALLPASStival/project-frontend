import HeaderBar from "@components/HeaderBar";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";
import { Wrapper } from "../../Style/Wrapper";
import { getFesInfo } from "./infoSlice";
import { Calendar, DateBox, DetailInfo, Info, Span } from "./styles";


const Schedule = () => {
const [dates,setDates] = useState([{date: 1, fests: ["딸기 축제", "불꽃 축제"]}, {date: 2, fests: []}, {date: 3, fests: []}, {date: 4, fests: []}, {date: 5, fests: []}, {date: 6, fests: []}, {date: 7, fests: []}, {date: 8, fests: []}, {date: 9, fests: []}, {date: 10, fests: []}, {date: 11, fests: []}, {date: 12, fests: []}, {date: 13, fests: []}, {date: 14, fests: []}, {date: 15, fests: []}, {date: 16, fests: []}, {date: 17, fests: []}, {date: 18, fests: []}, {date: 19, fests: []}, {date: 20, fests: []}, {date: 21, fests: []}, {date: 22, fests: []}, {date: 23, fests: []}, {date: 24, fests: []}, {date: 25, fests: []}, {date: 26, fests: []}, {date: 27, fests: []}, {date: 28, fests: []}, {date: 29, fests: []}, {date: 30, fests: []}, {date: 31, fests: []}])

const [fesId, setFesId] = useState(0)

const dispatch = useAppDispatch();
const state = useAppSelector((state) => state);

useEffect(() => {
  dispatch(getFesInfo(fesId))
}, [fesId])

// 현재 날짜 구하기
let now = new Date();
let year = now.getFullYear()
let month = now.getMonth()
const monthEn = ["JANUARY", "FEBRUARY", "MARCH", "APRIIL", "MAY", "JUNE", "JULY", "AUGUST" ,"SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
let monthWord = monthEn[month]

  const calendar = dates.map((d: any) => {
let festivals = d.fests
    const list = festivals.map((f:string) => {
      return<li style={{fontSize: "2rem", listStyleType: "disc", listStylePosition: "outside",  marginBottom: "1.1rem"}}>{f}</li>})
    return <DateBox id={d.date.toString()}>
      <span>{d.date}</span>
      {/* 오류 수정 필요 */}
      <ul style={{    margin: 0, padding: 0, marginTop: "1.1rem", marginLeft: "1rem"}}>
        {list}
      </ul>
    </DateBox>
  })

  return <>
          <HeaderBar />
          <Wrapper style={{height: "100%",width: "90%",marginTop: 0,paddingTop: "7%", paddingLeft: "7rem", alignItems: "center", justifyContent: "center"}}>
      <StyledDivRow style={{width: "100%", justifyContent: "space-around", marginBottom: "3%"}}>
        <StyledDivColumn>
      <Span>축제 일정</Span>
<Span style={{fontSize: "2.5rem"}}>{year}년 {month}월</Span>
</StyledDivColumn>
<Span style={{fontSize: "4rem"}}>{monthWord}</Span>
<div></div>
</StyledDivRow>
<StyledDivRow>
<Calendar>
{calendar}
</Calendar>
<DetailInfo>
<Info></Info>
<Info>장소 </Info>
<Info>축제 기간</Info>
<Info>축제 시간</Info>
<Info>가격</Info>
</DetailInfo>
</StyledDivRow>
</Wrapper>
  </>;
};

export default Schedule;
