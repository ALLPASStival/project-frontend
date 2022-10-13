import React, { FormEvent, useCallback } from "react";
import { Wrapper, Header, Form, Lable, LoginBtn } from "@pages/LogIn/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import useInput from "@hooks/useInput";

const Login = () => {
  const [id, onChangeId, setId] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            id: id,
            password: password,
          },
          {}
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

  return (
    <Wrapper>
      <Header>ALLPasstival</Header>
      <Form onSubmit={onSubmit}>
        <Lable>
          <span>아이디</span>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={onChangeId}
            placeholder="아이디 입력해주세요"
          />
        </Lable>
        <Lable>
          <span>패스워드</span>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </Lable>
        <LoginBtn onClick={onSubmit}>Log In</LoginBtn>
        <div>
          <Link to="/signup">회원 가입</Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
