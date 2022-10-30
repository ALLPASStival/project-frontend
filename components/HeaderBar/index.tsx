import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faCheckToSlot,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Bar, SubBar, SubMenu } from "@components/HeaderBar/styles";

const HeaderBar = () => {
  return (
    <Bar>
      <SubBar>
        <SubMenu>
          <span>
            <Link to="login">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              로그인
            </Link>
          </span>
          <span>
            <Link to="signup">
              <FontAwesomeIcon icon={faCheckToSlot} />
              회원가입
            </Link>
          </span>
          <span>
            <Link to="mypage">
              <FontAwesomeIcon icon={faUser} />
              MY PAGE
            </Link>
          </span>
          <span>
            <Link to="login">
              <FontAwesomeIcon icon={faPhone} />
              고객 센터
            </Link>
          </span>
        </SubMenu>
      </SubBar>
    </Bar>
  );
};

export default HeaderBar;
