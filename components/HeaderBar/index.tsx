import React, { useCallback } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import { logoutUserAsync } from "../../actions/UserAPI";

const HeaderBar = () => {
  const dispatch = useAppDispatch();

  const isLoggingIn = useSelector(
    (state: RootState) => state.register?.isLoggingIn
  );

  const jwt = localStorage.getItem("jwt");

  const onLogout = useCallback(
    (e: any) => {
      dispatch(logoutUserAsync({ jwt })).catch((error) => {
        alert(error.err);
      });
    },
    [jwt]
  );
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
                  {!isLoggingIn ? (
                    <Link to="/login">로그인</Link>
                  ) : (
                    <div onClick={onLogout}>로그아웃</div>
                  )}
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
        </div>
      </SubBar>
    </Bar>
  );
};

export default HeaderBar;
