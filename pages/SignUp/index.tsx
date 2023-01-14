import React, { useCallback, useEffect, useState } from "react";
import { Header, SubHeader, Wrapper, Form } from "@pages/LogIn/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import axios from "axios";
import useInput from "@hooks/useInput";
import {
  SignUpBtn,
  CheckBtn,
  Div,
  Label,
  Input,
  Correct,
  Error,
} from "@pages/SignUp/styles";
import { addUserAsync } from "../../actions/UserAPI";

const SingUp = () => {
  const dispatch = useAppDispatch();

  const [email, onChangeEmail, setEmail] = useInput("");
  const [nickname, onChangeNickname, setNickname] = useInput("");
  const [password, , setPassword] = useInput("");
  const [passwordCheck, , setPasswordCheck] = useInput("");
  const [age, onChangeAge, setAge] = useInput("");

  //중복 확인 검사
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);

  //비밀번호 맞나 틀리나 검사
  const [mismatchError, setMismatchError] = useState(false);
  const [mismatchCondition, setMismatchCondition] = useState(false);

  //비밀번호 유효성 검사: 8~ 15자 사이, 영어 소문자 대문자 상관 x, 특수기호, 숫자 반드시 필요
  useEffect(() => {
    const PasswordRegexp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/;
    if (password.match(PasswordRegexp)) setMismatchCondition(true);
    else setMismatchCondition(false);
  }, [password, setPassword]);

  //비밀번호 입력
  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value === passwordCheck);
    },
    [passwordCheck, setPassword]
  );

  //비밀번호 입력과 일치 불일치 검사
  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value === password);
    },
    [password, setPasswordCheck]
  );

  const headers = {
    "X-Requested-With": "XMLHttpRequest",
  };

  const onSubmit = useCallback(() => {
    dispatch(addUserAsync({ email, password, nickname })).catch((error) => {
      alert(error.err);
    });
  }, [email, password, nickname]);

  // 회원가입 전송
  // const onSubmit = useCallback(
  //   (e: any) => {
  //     e.preventDefault();
  //     axios
  //       .post(
  //         "http://3.36.112.187:8080/api/v1/auth/register",
  //         {
  //           email,
  //           password,
  //           nickname,
  //         },
  //         { withCredentials: true, headers }
  //       )
  //
  //       .then((response) => {
  //         alert("성공");
  //         setEmail("");
  //         setNickname("");
  //         setPassword("");
  //         setPasswordCheck("");
  //         setAge("");
  //       })
  //       .catch((error) => {
  //         alert("에러");
  //       });
  //   },
  //   [email, password, passwordCheck, nickname]
  // );

  // 아이디 중복 확인 전송
  const onCheckEmail = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .get(`http://3.36.112.187:8080/api/v1/users/email-exists/${email}`)

        .then((response) => {
          alert("사용가능한 아이디입니다.");
          setCheckEmail(true);

          if (email.length < 5) {
            setCheckEmail(false);
          }
        })
        .catch((error) => {
          alert("사용 불가능한 아이디입니다.");
          setCheckEmail(false);
        });
    },
    [email]
  );

  //닉네임 중복 확인 전송
  const onCheckNickname = useCallback(
    (e: any) => {
      e.preventDefault();
      axios
        .get(
          `http://3.36.112.187:8080/api/v1/users/nickname-exists/${nickname}`
        )

        .then((response) => {
          alert("사용가능한 닉네임입니다.");
          setCheckNickName(true);

          if (nickname.length < 1) {
            setCheckNickName(false);
          }
        })
        .catch((error) => {
          alert("사용불가능한 닉네임입니다.");
          setCheckNickName(false);
        });
    },
    [nickname]
  );

  return (
    <div>
      <Wrapper>
        <Header>ALLPASSTIVAL</Header>
        <SubHeader>계정 만들기</SubHeader>
        <Form onSubmit={onSubmit}>
          <Div>
            <Label>
              <div>아이디</div>
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="아이디"
              />
              <CheckBtn onClick={onCheckEmail}>아이디 중복 확인</CheckBtn>
            </Label>
            {checkEmail && email.length > 0 && (
              <Error>사용 불가능한 아이디입니다.</Error>
            )}
            {checkEmail && <Correct>사용 가능한 아이디입니다.</Correct>}
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
              <CheckBtn onClick={onCheckNickname}>닉네임 중복 확인</CheckBtn>
            </Label>
            {checkNickName && nickname.length > 0 && (
              <Error>사용 불가능한 닉네임입니다.</Error>
            )}
            {checkNickName && <Correct>사용 가능한 닉네임입니다.</Correct>}
          </Div>
          <Label>
            <div>나이</div>
            <Input
              type="text"
              id="age"
              name="age"
              value={age}
              onChange={onChangeAge}
              placeholder="나이"
            />
          </Label>
          <Label>
            <div>비밀번호</div>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
          </Label>
          {!mismatchCondition && password.length > 0 && (
            <Error>비밀번호 조건에 일치하지 않습니다!</Error>
          )}
          {mismatchCondition && <Correct>비밀번호 조건에 일치합니다!</Correct>}
          <Label>
            <div>비밀번호 확인</div>
            <Input
              type="password"
              id="password"
              name="password"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
              placeholder="비밀번호 확인"
            />
          </Label>
          {!mismatchError && passwordCheck.length > 0 && (
            <Error> 비밀번호가 일치하지 않습니다!</Error>
          )}
          {mismatchError && passwordCheck.length > 7 && (
            <Correct> 비밀번호가 일치합니다!</Correct>
          )}
          <SignUpBtn onClick={onSubmit}>회원가입</SignUpBtn>
        </Form>
      </Wrapper>
    </div>
  );
};

export default SingUp;
