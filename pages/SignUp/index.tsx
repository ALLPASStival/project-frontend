import React, { useCallback } from "react";
import { Header, SubHeader, Wrapper, Form } from "@pages/LogIn/styles";
import axios from "axios";
import useInput from "@hooks/useInput";
import { SignUpBtn, CheckBtn, Div, Label, Input } from "@pages/SignUp/styles";

const SingUp = () => {
  const [id, onChangeId, setId] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [passwordcheck, onChangePasswordCheck, setPasswordCheck] = useInput("");

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
      <Header>ALLPASSTIVAL</Header>
      <SubHeader>계정 만들기</SubHeader>
      <Form onSubmit={onSubmit}>
        <Div>
          <Label>
            <div>아이디</div>
            <Input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
              placeholder="아이디"
            />
            <CheckBtn onClick={onSubmit}>아이디 중복 확인</CheckBtn>
          </Label>
        </Div>
        <Div>
          <Label>
            <div>닉네임</div>
            <Input
              type="text"
              id="password"
              name="password"
              value={nickname}
              onChange={onChangeNickname}
              placeholder="닉네임"
            />
            <CheckBtn onClick={onSubmit}>닉네임 중복 확인</CheckBtn>
          </Label>
        </Div>
        <Label>
          <div>비밀번호</div>
          <Input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </Label>
        <Label>
          <div>비밀번호 확인</div>
          <Input
            type="text"
            id="password"
            name="password"
            value={passwordcheck}
            onChange={onChangePasswordCheck}
            placeholder="비밀번호 확인"
          />
        </Label>
        <SignUpBtn onClick={onSubmit}>회원가입</SignUpBtn>
      </Form>
    </Wrapper>
  );
};

export default SingUp;
