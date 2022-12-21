import HeaderBar from "@components/HeaderBar";
import { faFaceLaugh, faPencil, faPerson, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivCenter, StyledDivColumn, StyledDivRow } from "../../Style/FlexBox"
import { OrangeBox } from "../../Style/OrangeBox";
import { CatBar, FesWrapper, FirstRow, OneFes, OrangeSpan, ProfileBg, SecondRow, UserIcon } from "./styles";
import { getUserInfo } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Mypage = () => {
const [cat, setCat] = useState("")

const [festivals, setFestival] = useState([{cat: "[ 지역 ]", title: "딸기 축제", like: "11", comment: "11", place: "서울", time: "10:00AM ~ 20:00PM", size: "중간"}])
const [writings, setWriting] = useState([])
const [rFestivals, setRFestival] = useState([])

const dispatch = useAppDispatch();
const state = useAppSelector((state) => state);

console.log("State", state);

useEffect(() => {
  dispatch(getUserInfo(1))
  // setFestival(state.user.data)
}, [])

const showDipFes = () => {
setCat("dip")
}

const dipFes = 
  festivals.map((fes) => {
    return <OneFes>
      <FirstRow>
        <div>
      <span>{fes.cat}</span>
      <span>{fes.title}</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "2.5rem", marginRight: "0.7rem"}}/>
        <span>{fes.like}</span>
        <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem", marginRight: "0.7rem", marginLeft: "1rem"}}/>
        <span>{fes.comment}</span>
      </div>
      </FirstRow>
      <SecondRow>
        <span>장소 : {fes.place}</span>
        <span>일시 : {fes.time}</span>
        <span>규모 : {fes.size}</span>
      </SecondRow>
    </OneFes>
  })


const showWriting = () => {
  setCat("writing")
}

const writing = 
  writings.map((w) => {
    return <OneFes>
      <FirstRow>
        <div>
      {/* <span>{w.cat}</span>
      <span>{w.title}</span> */}
      </div>
      <div>
        <FontAwesomeIcon icon={faThumbsUp} style={{fontSize: "2.5rem", marginRight: "0.7rem"}}/>
        {/* <span>{w.like}</span>
        <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem", marginRight: "0.7rem", marginLeft: "1rem"}}/>
        <span>{w.comment}</span> */}
      </div>
      </FirstRow>
      <SecondRow>
        {/* <span>장소 : {w.place}</span>
        <span>일시 : {w.time}</span>
        <span>규모 : {w.size}</span> */}
      </SecondRow>
    </OneFes>
  })

  // const recentFest = rFestivals.map((r) => {
  //   return <img src={r.url} style={{width: "17.7rem", height: "18.5rem"}}/>
  // })


  return <>
        <HeaderBar />
        <Wrapper style={{height: "100%",width: "90%",marginTop: 0,paddingTop: "7%", paddingLeft: "5rem", paddingRight: "5rem", alignItems: "center"}}>
        <StyledDivRow style={{justifyContent: "space-between"}}>
        <StyledDivColumn style={{height: "46.8rem", alignItems: "center"}}>
          <ProfileBg >
        <UserIcon icon={faUser} />
        <span style={{opacity: "0.5"}}>프로필 수정</span>
        </ProfileBg>
        <OrangeBox style={{width: "39.9rem"}}>
          <OrangeSpan>닉네임</OrangeSpan>
          <span>축제가 좋아요</span>
          <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem"}}/>
        </OrangeBox>
        <OrangeBox style={{width: "39.9rem"}}>
          <OrangeSpan>아이디</OrangeSpan>
          <span>happyday</span>
          <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem"}}/>
        </OrangeBox>
        </StyledDivColumn>
        <StyledDivColumn style={{ height: "58.2rem", width: "79.4rem",justifyContent: "flex-start"}}>
        <StyledDivColumn style={{ height: "5.36rem", width: "100%"}}>
        <CatBar>
          <button onClick={showDipFes}>내가 찜한 축제</button>
          <button onClick={showWriting}>내가 쓴 글</button>
        </CatBar>
        </StyledDivColumn>
        {cat == "dip" ? dipFes : writing}
        </StyledDivColumn>
        </StyledDivRow>
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <FesWrapper>
          <span>최근 본 축제</span>
        {/* {recentFest} */}
        </FesWrapper>
        </div>
        </Wrapper>
</>;
};

export default Mypage;
