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
import { getUserInfo } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Mypage = () => {
  // 새 이미지
  const [photo, setPhoto] = useState(false);
  const [files, setFiles] = useState("");
  const [previewImg, setPreviewImg] = useState();
  const [title, setTitle] = useState("");

  const [cat, setCat] = useState("");

  const [nickname, setNickname] = useState("");
  const [isNickname, setIsNickname] = useState(true);
  const [id, setId] = useState(0);
  const [isId, setIsId] = useState(true);

  const [userInfo, setUserInfo] = useState({
    email: "happyday@naver.com",
    nickname: "축제가 좋아요",
    profilPicUrl: "",
  });

  const [festivals, setFestival] = useState([
    {
      cat: "[ 지역 ]",
      title: "딸기 축제",
      like: "11",
      comment: "11",
      place: "서울",
      time: "10:00AM ~ 20:00PM",
      size: "중간",
    },
  ]);
  const [writings, setWriting] = useState([
    {
      cat: "[ 지역 ]",
      title: "딸기 축제 후기 알려드림",
      like: "11",
      comment: "11",
      place: "서울",
      time: "10:00AM ~ 20:00PM",
      date: "1월",
    },
  ]);
  const [rFestivals, setRFestival] = useState([]);
  const [select, setSelect] = useState("");

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  console.log("State", state);

  useEffect(() => {
    dispatch(getUserInfo(1));
    // setUserInfo(state.user.data)
  }, []);

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

  const showDipFes = () => {
    setCat("dip");
    setSelect("dip");
  };

  const dipFes = festivals.map((fes) => {
    return (
      <OneFes>
        <FirstRow>
          <div>
            <span>{fes.cat}</span>
            <span>{fes.title}</span>
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
          <span>규모 : {fes.size}</span>
        </SecondRow>
      </OneFes>
    );
  });

  const showWriting = () => {
    setCat("writing");
    setSelect("writing");
  };

  const writing = writings.map((w) => {
    return (
      <OneFes>
        <FirstRow>
          <div>
            <span>{w.cat}</span>
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
        <SecondRow>
          <span>장소 : {w.place}</span>
          <span>일시 : {w.time}</span>
          <span>규모 : {w.date}</span>
        </SecondRow>
      </OneFes>
    );
  });

  // const recentFest = rFestivals.map((r) => {
  //   return <img src={r.url} style={{width: "17.7rem", height: "18.5rem"}}/>
  // })

  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          marginTop: 0,
          paddingTop: "7%",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          alignItems: "center",
        }}
      >
        <StyledDivRow style={{ justifyContent: "space-between" }}>
          <StyledDivColumn style={{ alignItems: "center" }}>
            {userInfo.profilPicUrl.length > 5 || previewImg ? (
              <>
                <img
                  src={previewImg}
                  alt="img"
                  style={{
                    width: "30rem",
                    height: "30rem",
                    borderRadius: "50%",
                  }}
                />
              </>
            ) : (
              <ProfileBg>
                <UserIcon icon={faUser} />
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
                    }}
                  >
                    프로필 수정
                  </label>
                </form>
              </ProfileBg>
            )}
            <OrangeBox style={{ width: "39.9rem" }}>
              <OrangeSpan>닉네임</OrangeSpan>
              {isNickname ? (
                <>
                  <UserSpan>{userInfo.nickname}</UserSpan>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: "2.5rem" }}
                    onClick={()=> setIsNickname(false)}

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
                    onClick={() => setIsNickname(true)}
                  />
                </>
              )}
            </OrangeBox>
            <OrangeBox style={{ width: "39.9rem" }}>
              <OrangeSpan>아이디</OrangeSpan>
              {isId ? (
                <>
                  <UserSpan>{userInfo.email}</UserSpan>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: "2.5rem" }}
                    onClick={()=> setIsId(false)}
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
                    onClick={() => setIsId(true)}
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
            <StyledDivColumn style={{ height: "5.36rem", width: "100%" }}>
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
            {/* {recentFest} */}
          </FesWrapper>
        </div>
      </Wrapper>
    </>
  );
};

export default Mypage;
