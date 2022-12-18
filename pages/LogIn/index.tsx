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

import { User, userSlice } from "../../reducers/user";
// import { logIn } from "../../actions/UserAPI";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useSelector } from "react-redux";

const Login = () => {
  const user = useAppSelector((state) => state.user);
  const [id, onChangeId, setId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  // const [user, setUser] = useState<User>({
  //   isLoggingIn: false,
  //   data: null,
  //   id: "",
  //   password: "",
  //   error: "",
  // });

  // const onLogout = useCallback(() => {
  //   useAppDispatch(userSlice.actions.logOut());
  // }, []);

  // const onSubmit = useCallback(
  //   (e: any) => {
  //     e.preventDefault();
  //     useAppDispatch(
  //       logIn({
  //         id,
  //         password,
  //       })
  //     );
  //   },
  //   [useAppDispatch, id, password]
  // );
  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            id,
            password,
          },
          { withCredentials: true }
        )

        .then((response) => {
          alert("성공");
        })
        .catch((error) => {
          alert("에러");
        });
    },
    [id, password]
  );

  // const onClick = useCallback(() => {
  //   useAppDispatch(
  //     logIn({
  //       id: "seongjun",
  //       password: "password",
  //     })
  //   );
  // }, [useAppDispatch, id, password]);

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
            value={id}
            onChange={onChangeId}
            placeholder="아이디"
          />
        </Lable>
        <Lable>
          <Input
            type="text"
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
