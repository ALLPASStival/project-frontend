import HeaderBar from "@components/HeaderBar";
import { faFaceLaugh, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivCenter, StyledDivColumn, StyledDivRow } from "../../Style/FlexBox"
import { OrangeBox } from "../../Style/OrangeBox";

const Mypage = () => {
  return <>
        <HeaderBar />
        <Wrapper>
        <StyledDivRow>
        <StyledDivColumn>
          <StyledDivCenter style={{backgroundColor: "#D9D9D9",width: "25.25rem", height: "25.25rem", borderRadius: "50%", flexDirection: "column" }}>
        <FontAwesomeIcon icon={faUser} style={{color: "black", width: "16.068rem", height: "13.679rem"}}/>
        <span>프로필 수정      </span>
        </StyledDivCenter>
        <OrangeBox>
          <span>닉네임</span>
          <span>축제가 좋아요</span>
        </OrangeBox>
        <OrangeBox>
          <span>아이디</span>
          <span>happyday</span>
        </OrangeBox>
        </StyledDivColumn>
        </StyledDivRow>
        </Wrapper>
</>;
};

export default Mypage;
