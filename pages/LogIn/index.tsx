import React, { FormEvent, useCallback, useState } from "react";
import {
  Wrapper,
  Header,
  Form,
  Lable,
  Input,
  LoginBtn,
  SearchBox,
  SubHeader,
} from "@pages/LogIn/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import useInput from "@hooks/useInput";
import HeaderBar from "@components/HeaderBar";
import { useAppDispatch } from "../../redux/hooks";
import { setUserAsync } from "../../actions/UserAPI";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch(setUserAsync({ email, password })).catch((error) => {
        alert(error.err);
      });
    },
    [email, password]
  );

  // const onSubmit = useCallback(
  //   (e: any) => {
  //     e.preventDefault();
  //     axios
  //       .post(
  //         "http://3.36.112.187:8080/api/v1/auth/login",
  //         {
  //           email,
  //           password,
  //         },
  //         { withCredentials: true }
  //       )
  //
  //       .then((response) => {
  //         alert("성공");
  //       })
  //       .catch((error) => {
  //         alert("에러");
  //       });
  //   },
  //   [email, password]
  // );

  return (
    <Wrapper>
      <Header>ALLPASSTIVAL</Header>
      <SubHeader>전국 모든 축제가 시작되는 공간</SubHeader>
      <Form onSubmit={onSubmit}>
        <Lable>
          <Input
            type="text"
            id="id"
            name="id"
            value={email}
            onChange={onChangeEmail}
            placeholder="아이디"
          />
        </Lable>
        <Lable>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </Lable>
        <SearchBox>
          <span>
            <Link to="/signup">회원 가입</Link>
          </span>
          <span>아이디/비밀번호 찾기</span>
        </SearchBox>
        <LoginBtn type="submit">로그인</LoginBtn>
      </Form>
      {/*<button onClick={onClick}>로그인</button>*/}
    </Wrapper>
  );
};

export default Login;
