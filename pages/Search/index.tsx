import React, { useCallback, useEffect, useState } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
// import ReactSearchBox from "react-search-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPencil } from "@fortawesome/free-solid-svg-icons";

import {
  BottomSide,
  FestivalList,
  LeftOpt,
  ListBottom,
  ListTop,
  ListTopGood,
  ListTopTitle,
  MiddleOpt,
  MiddleSide,
  RightOpt,
  SearchMain,
  TopHeader,
  TopSearch,
  TopSearchBox,
  TopTitle,
} from "@pages/Search/styles";
import { getFestival, getFestivalReview } from "../../actions/FestivalAPI";
import { useAppDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [ref, inView] = useInView({ threshold: [0, 0.25, 0.5, 0.75, 1] });

  const List = useSelector((state: RootState) => state.festival.festival);

  useEffect(() => {
    if (List.length === 0) {
      console.log("첫 축제 로딩");
      dispatch(getFestival({}));
      return;
    }
  }, []);

  useEffect(() => {
    if (List.length !== 0 && inView) {
      console.log("첫 로딩 이후 무한 스크롤");
      dispatch(getFestival({}));
    }
  }, [inView]);

  const festivalList = [
    "학교 축제",
    "지역 축제",
    "영화제",
    "음악 축제",
    "종교 축제",
  ];

  const PlaceList = [
    "경기도",
    "서울",
    "제주도",
    "충청도",
    "경상도",
    "전라도",
    "강원도",
  ];

  const MonthList = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const List2 = [
    {
      name: "프로방스 마을 빛 축제",
      place: "프로방스 마을",
      date: "2022-12-16~2022-12-17",
      month: "12월",
    },
    {
      name: "안성 두메 호수 빙어축제",
      place: "두교리광혜원저수지",
      date: "2022-12-24~2023-02-05",
      month: "12월",
    },
    {
      name: "뷰티풀 고양",
      place: "일산 문화광장",
      date: "2022-12-02~2022-12-03",
      month: "12월",
    },
    {
      name: "펫츠런",
      place: "고양시 일산 문화광장",
      date: "2022-12-02~2022-12-03",
      month: "12월",
    },
    {
      name: "퍼스트 가든 빛 축제",
      place: "파주시 퍼스트가든",
      date: "2022-12-01~2022-12-03",
      month: "12월",
    },
    {
      name: "안산 별빛마을",
      place: "안산 문화광장",
      date: "2022-12-06~2022-12-09",
      month: "12월",
    },
  ];

  const [festivalKind, setFestival] = useState(festivalList[0]);

  const onChangeValue = useCallback((e: any) => {
    setFestival(e.target.value);
  }, []);

  const [festivalKind1, setFestival1] = useState(PlaceList[0]);
  const onChangeValue1 = useCallback((e: any) => {
    setFestival1(e.target.value);
  }, []);

  const [festivalKind2, setFestival2] = useState(MonthList[0]);
  const onChangeValue2 = useCallback((e: any) => {
    setFestival2(e.target.value);
  }, []);

  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
          paddingTop: "40rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
        }}
      >
        <SearchMain>
          <TopHeader>
            <TopTitle>축제 찾기</TopTitle>
            {/*<ReactSearchBox*/}
            {/*  placeholder="검색창"*/}
            {/*  data={data}*/}
            {/*  onSelect={(record: any) => console.log(record.key)}*/}
            {/*  onChange={(value) => console.log(value)}*/}
            {/*/>*/}

            {/* <TopSearchBox>
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.4rem" }} />
              <input type="text" id="search" name="search" />
            </TopSearchBox> */}
          </TopHeader>
          <MiddleSide>
            <LeftOpt onChange={onChangeValue} value={festivalKind}>
              {festivalList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </LeftOpt>
            <MiddleOpt onChange={onChangeValue1} value={festivalKind1}>
              {PlaceList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </MiddleOpt>
            <RightOpt onChange={onChangeValue2} value={festivalKind2}>
              {MonthList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </RightOpt>
          </MiddleSide>
          <BottomSide>
            {List &&
              festivalKind2 != "12월" &&
              [...Array(List?.length)].map((e, ind) => {
                const MainId = List[ind].festivalId;
                return (
                  <Link
                    to={`/???/${MainId}`}
                    style={{ textDecoration: "none", color: "black" }}
                    key={ind}
                  >
                    <FestivalList ref={ref}>
                      <ListTop>
                        <ListTopTitle>
                          [지역 축제] {List[ind].festivalName}
                        </ListTopTitle>
                        <ListTopGood>
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            style={{ marginRight: "0.7rem" }}
                          />
                          <span style={{ marginRight: "0.7rem" }}>
                            {List[ind].likes}
                          </span>
                          <FontAwesomeIcon
                            icon={faPencil}
                            style={{ marginRight: "0.7rem" }}
                          />
                          <span style={{ marginRight: "0.7rem" }}>
                            {List[ind].review}
                          </span>
                        </ListTopGood>
                      </ListTop>
                      <ListBottom>
                        <div>장소 : {List[ind].holdingVenue}</div>
                        <div>
                          일시 : {List[ind].startDate}~ {List[ind].finishDate}
                        </div>
                        <div>월 : {List[ind].startDate.substring(5, 7)}월</div>
                      </ListBottom>
                    </FestivalList>
                  </Link>
                );
              })}
            {List2 &&
              festivalKind2 == "12월" &&
              [...Array(List2?.length)].map((e, ind) => {
                return (
                  <FestivalList>
                    <ListTop>
                      <ListTopTitle>[지역 축제] {List2[ind].name}</ListTopTitle>
                      <ListTopGood>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        0
                        <FontAwesomeIcon icon={faPencil} />0
                      </ListTopGood>
                    </ListTop>
                    <ListBottom>
                      <div>장소:{List2[ind].place}</div>
                      <div>일시:{List2[ind].date}</div>
                      <div>월: {List2[ind].month}월</div>
                    </ListBottom>
                  </FestivalList>
                );
              })}
          </BottomSide>
        </SearchMain>
      </Wrapper>
    </>
  );
};

export default Search;
