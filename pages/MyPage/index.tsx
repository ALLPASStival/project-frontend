import HeaderBar from "@components/HeaderBar";
import { faFaceLaugh, faPencil, faPerson, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivCenter, StyledDivColumn, StyledDivRow } from "../../Style/FlexBox"
import { OrangeBox } from "../../Style/OrangeBox";
import { CatBar, FirstRow, OneFes, OrangeSpan, ProfileBg, SecondRow, UserIcon } from "./styles";

const Mypage = () => {
const [festivals, setFestival] = useState([{cat: "[ 지역 ]", title: "딸기 축제", like: "11", comment: "11", place: "서울", time: "10:00AM ~ 20:00PM", size: "중간"}])

  return <>
        <HeaderBar />
        <Wrapper style={{height: "100%",width: "90%",paddingLeft: "5rem", paddingRight: "5rem"}}>
        <StyledDivRow style={{justifyContent: "space-between"}}>
        <StyledDivColumn style={{height: "100%"}}>
          <ProfileBg >
        <UserIcon icon={faUser} />
        <span style={{opacity: "0.5"}}>프로필 수정</span>
        </ProfileBg>
        <OrangeBox>
          <OrangeSpan>닉네임</OrangeSpan>
          <span>축제가 좋아요</span>
          <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem"}}/>
        </OrangeBox>
        <OrangeBox>
          <OrangeSpan>아이디</OrangeSpan>
          <span>happyday</span>
          <FontAwesomeIcon icon={faPencil} style={{fontSize: "2.5rem"}}/>
        </OrangeBox>
        </StyledDivColumn>
        <StyledDivColumn style={{ height: "58.2rem", width: "79.4rem",justifyContent: "flex-start"}}>
        <StyledDivColumn style={{ height: "5.36rem", width: "100%"}}>
        <CatBar>
          <span>내가 찜한 축제</span>
          <span>내가 쓴 글</span>
        </CatBar>
        </StyledDivColumn>
        {festivals.map((fes) => {
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
                  })}
        </StyledDivColumn>
        </StyledDivRow>

        </Wrapper>
</>;
};

export default Mypage;
