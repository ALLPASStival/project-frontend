import HeaderBar from "@components/HeaderBar";
import {
  faCheck,
  faPencil,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../../Style/Wrapper";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";
import { OrangeBox } from "../../Style/OrangeBox";
import {
  CatBar,
  FesWrapper,
  FirstRow,
  OneFes,
  OrangeSpan,
  ProfileBg,
  SecondRow,
  UserIcon,
  UserInput,
  UserSpan,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMypost, getUserInfo } from "../../actions/UserAPI";
import { userPostInitialState } from "../../reducers/user";

const Mypage = () => {
  // 새 이미지
  const [photo, setPhoto] = useState(false);
  const [files, setFiles] = useState("");
  const [previewImg, setPreviewImg] = useState();
  const [title, setTitle] = useState("");

  const [cat, setCat] = useState("");

  const [nickname, setNickname] = useState("");
  const [isNickname, setIsNickname] = useState(true);
  const [email, setEmail] = useState("");

  const [id, setId] = useState(0);
  const [isId, setIsId] = useState(true);

  const [userInfo, setUserInfo] = useState({
    email: "yamu@naver.com",
    nickname: "야무지조",
    profilePicUrl: "",
    gender: "남자",
    age: "",
  });

  const [festivals, setFestival] = useState([
    {
      cat: "[ 지역 ] ",
      title: "딸기 축제",
      like: "11",
      comment: "11",
      place: "서울",
      time: "10:00AM ~ 20:00PM",
      size: "중간",
      month: "1월",
    },
  ]);
  let posts = [
    {
      postId: 14,
      title: "같이 축제 가실 분~",
      articleContent: "test",
      imageUrl: "",
      category: "",
      state: "onGoing",
      createdAt: "2023-01-21- 07:16:05",
      lastModifiedAt: "2023-01-21- 07:16:05",
      like: "0",
      comment: "0",
      place: "서울",
      time: "10:00AM ~ 20:00PM",
      size: "중간",
    },
  ];
  const [rFestivals, setRFestival] = useState([
    {
      postId: 1,
      url: "http://imgnews.naver.net/image/5364/2021/08/10/0000530204_001_20210810160832237.jpg",
    },
    {
      postId: 2,
      url: "http://imgnews.naver.net/image/5510/2022/10/27/0000091880_001_20221027083802827.jpg",
    },
  ]);
  const [select, setSelect] = useState("");

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getUserInfo(0));
  //   if (state.user.resultCode == "SUCCESS") {
  //     console.log("State", state);
  //     console.log("State", state.user.result);

  //     userInfo = state.user.result;
  //     console.log(userInfo);
  //     setNickname(userInfo.nickname);
  //     setEmail(userInfo.email);
  //   }
  // }, [state.user.resultCode]);

  // useEffect(() => {
  //   dispatch(getMypost(0));
  //   if (state.post.resultCode == "SUCCESS") {
  //     console.log("State", state);
  //     console.log("State", state.post.result);
  //     posts = state.post.result.content;
  //   }
  // }, [state.post.resultCode]);

  // 사진 받아오기
  const onLoadfile = (e: any) => {
    const file = e.target.files;
    console.log("파일명 ", file);
    setFiles(file);
    let reader = new FileReader();

    console.log(reader);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      let previewImgUrl: any = reader.result;
      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };

    setPhoto(true);
  };

  // 임시
  // const onAddNewPost = () => {
  //   const formData = new FormData();
  //   formData.append("imageUrl", files);
  //   let imageBoardDto = JSON.stringify({

  //   });

  //   formData.append("imageBoardDto", imageBoardDto);
  //   console.log(
  //     "url :",
  //     preURL.preURL + `/boards/image`,
  //     "보내는 data :",
  //     formData
  //   );
  //   let config = {
  //     headers: {
  //       "Content-Type": `application/x-www-form-urlencoded`,
  //     },
  //   };

  //   alert("새 짤이 등록되었습니다!");
  //   document.location.href = "/boards";
  //   axios
  //     .post(preURL.preURL + `/boards/image`, formData, config)
  //     .then((res) => {
  //       console.log("❕새 프로필 등록❕ ", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("⚠️ 새 프로필 등록 ⚠️ ", err);
  //     });
  // };

  const onChangeValue = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postEmail = () => {
    let element = document.getElementById("email") as HTMLInputElement | null;
    if (element != null) {
      let email = element.value;
      return email;
    }
  };

  const showDipFes = () => {
    setCat("dip");
    setSelect("dip");
  };

  const dipFes = festivals.map((fes) => {
    return (
      <OneFes>
        <FirstRow>
          <div>
            <span style={{ fontSize: "2.5rem" }}>
              <b>{fes.cat}</b>
            </span>
            <span style={{ fontSize: "2.5rem" }}>
              <b>{fes.title}</b>
            </span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ fontSize: "2.5rem", marginRight: "0.7rem" }}
            />
            <span>{fes.like}</span>
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                fontSize: "2.5rem",
                marginRight: "0.7rem",
                marginLeft: "1rem",
              }}
            />
            <span>{fes.comment}</span>
          </div>
        </FirstRow>
        <SecondRow>
          <span>장소 : {fes.place}</span>
          <span>일시 : {fes.time}</span>
          <span> {fes.month} </span>
        </SecondRow>
      </OneFes>
    );
  });

  const showWriting = () => {
    setCat("writing");
    setSelect("writing");
  };

  const writing = posts.map((w: any) => {
    return (
      <OneFes style={{ height: "2rem" }}>
        <FirstRow>
          <div>
            <span>{w.category}</span>
            <span>{w.title}</span>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              style={{ fontSize: "2.5rem", marginRight: "0.7rem" }}
            />
            <span>{w.like}</span>
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                fontSize: "2.5rem",
                marginRight: "0.7rem",
                marginLeft: "1rem",
              }}
            />
            <span>{w.comment}</span>
          </div>
        </FirstRow>
      </OneFes>
    );
  });

  const recentFest = rFestivals.map((r) => {
    return (
      <img
        src={r.url}
        style={{ width: "17.7rem", height: "22rem", marginRight: "2%" }}
      />
    );
  });

  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          marginTop: 0,
          paddingTop: "12%",
          paddingBottom: "10%",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          alignItems: "center",
        }}
      >
        <StyledDivRow style={{ width: "95%", justifyContent: "space-between" }}>
          <StyledDivColumn style={{ alignItems: "center" }}>
            {userInfo.profilePicUrl.length > 5 || previewImg ? (
              <>
                <img
                  src={previewImg}
                  alt="img"
                  style={{
                    width: "30rem",
                    height: "30rem",
                    borderRadius: "50%",
                    marginBottom: "2.6rem",
                  }}
                />
              </>
            ) : (
              <ProfileBg>
                <UserIcon icon={faUser} style={{ color: "#fe9010" }} />
                <form>
                  <input
                    type="file"
                    id="image"
                    accept="img/*"
                    onChange={onLoadfile}
                    style={{
                      display: "none",
                    }}
                  />
                  <label
                    htmlFor="image"
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#fe9010",
                    }}
                  >
                    프로필 수정
                  </label>
                </form>
              </ProfileBg>
            )}
            <OrangeBox style={{ width: "35rem" }}>
              <OrangeSpan>닉네임</OrangeSpan>
              {isNickname ? (
                <>
                  {/* <UserSpan>{nickname}</UserSpan> */}
                  <UserSpan>{userInfo.nickname}</UserSpan>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: "2.5rem" }}
                    onClick={() => setIsNickname(false)}
                  />
                </>
              ) : (
                <>
                  <UserInput
                    type="text"
                    id="nickname"
                    name="nickname"
                    onChange={onChangeValue}
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "2.5rem" }}
                    onClick={() => {
                      setIsNickname(true);
                    }}
                  />
                </>
              )}
            </OrangeBox>
            <OrangeBox style={{ width: "35rem" }}>
              <OrangeSpan>이메일</OrangeSpan>
              {isId ? (
                <>
                  {/* <UserSpan>{email}</UserSpan> */}
                  <UserSpan>{userInfo.email}</UserSpan>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: "2.5rem" }}
                    onClick={() => setIsId(false)}
                  />
                </>
              ) : (
                <>
                  <UserInput
                    type="text"
                    id="email"
                    name="email"
                    onChange={onChangeValue}
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: "2.5rem" }}
                    onClick={() => {
                      setIsId(true);
                    }}
                  />
                </>
              )}
            </OrangeBox>
          </StyledDivColumn>
          <StyledDivColumn
            style={{
              height: "58.2rem",
              width: "79.4rem",
              justifyContent: "flex-start",
            }}
          >
            <StyledDivColumn
              style={{ paddingTop: "5.5rem", height: "5rem", width: "100%" }}
            >
              <CatBar>
                <button
                  onClick={showDipFes}
                  className={`${select == "dip" ? "select" : ""}`}
                >
                  내가 찜한 축제
                </button>
                <button
                  onClick={showWriting}
                  className={`${select == "writing" ? "select" : ""}`}
                >
                  내가 쓴 글
                </button>
              </CatBar>
            </StyledDivColumn>
            {cat == "writing" ? writing : dipFes}
          </StyledDivColumn>
        </StyledDivRow>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FesWrapper>
            <span>최근 본 축제</span>
            <StyledDivRow style={{ paddingLeft: "3rem", paddingTop: "3rem" }}>
              {recentFest}
            </StyledDivRow>
          </FesWrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Mypage;
