import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCheckToSlot,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Bar,
  LeftMenu,
  MainBar,
  Profile,
  RightMenu,
  SubBar,
  TopMenu,
} from "@components/HeaderBar/styles";
import WritingRecruit from "@pages/WritingRecruit";

const HeaderBar = () => {
  return (
    <Bar>
      <MainBar>
        <TopMenu>
          <Link to="main" style={{ textDecoration: "none" }}>
            <LeftMenu>ALLPASSTIVAL</LeftMenu>
          </Link>
          <RightMenu>
            <span>
              <Link to="login">
                <span>
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                  로그인
                </span>
              </Link>
            </span>
            <span>
              <Link to="signup">
                <span>
                  <FontAwesomeIcon icon={faCheckToSlot} />
                  회원가입
                </span>
              </Link>
            </span>
            <span>
              <Link to="mypage">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                  MY PAGE
                </span>
              </Link>
            </span>
            <span>
              <Link to="callcenter">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                  고객 센터
                </span>
              </Link>
            </span>
          </RightMenu>
          <Profile>
            <img src="SlideImage/img1.jpg" alt="프로필 사진" />
          </Profile>
        </TopMenu>
      </MainBar>
      <SubBar>
        <div>
          <span>
            <Link to="/search">축제 찾기</Link>
          </span>
          <span>
            <Link to="/map">지도로 찾기</Link>
          </span>
          <span>
            <Link to="/home">일정</Link>
          </span>
          <span>
            <Link to="/community">커뮤니티</Link>
          </span>
          <span>
            <Link to="/writingcommunity">자유</Link>
          </span>
          <span>
            <Link to="/writingreview">후기</Link>
          </span>
          <span>
            <Link to="/writingrecruit">구인</Link>
          </span>
        </div>
      </SubBar>
    </Bar>
  );
};

export default HeaderBar;
