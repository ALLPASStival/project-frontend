import React, { FormEvent, useCallback } from "react";
import {
  Wrapper,
  Header,
  Form,
  Lable,
  Input,
  Input2,
  CheckBtn,
  JoinBtn,
  SubHeader,
  title,
} from "@pages/Join/styles";
import axios from "axios";
import useInput from "@hooks/useInput";

const Join = () => {
  const [id, onChangeId, setId] = useInput("");
  const [nick, onChangeNick, setNick] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");
  const [checkPassword, onChangecheckPassword, setcheckPassword] = useInput("");

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            id,
            nick,
            password,
            checkPassword,
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
    [id, nick, password, checkPassword]
  );

  const onCheckId = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            id,
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
    [id]
  );

  const onCheckNick = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .post(
          "",
          {
            nick,
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
    [nick]
  );

  return (
    <Wrapper>
      <Header>ALLPASSTIVAL</Header>
      <SubHeader>계정 만들기</SubHeader>
      <Form onSubmit={onSubmit}>
        <Lable>
          <span>아이디 *</span>
          <Input2
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={onChangeId}
          />
          <CheckBtn onClick={onCheckNick}>중복확인</CheckBtn>
        </Lable>

        <Lable>
          <span id={"title"}>닉네임 *</span>
          <Input2
            type="text"
            id="nick"
            name="nick"
            value={nick}
            onChange={onChangeNick}
          />
          <CheckBtn onClick={onCheckNick}>중복확인</CheckBtn>
        </Lable>

        <Lable>
          <span id={"title"}>비밀번호 *</span>
          <Input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
        </Lable>
        <Lable>
          <span id={"title"}>비밀번호 확인 *</span>
          <Input
            type="text"
            id="checkPassword"
            name="checkPassword"
            value={checkPassword}
            onChange={onChangecheckPassword}
          />
        </Lable>
        <JoinBtn onClick={onSubmit}>회원가입</JoinBtn>
      </Form>
    </Wrapper>
  );
};

export default Join;
