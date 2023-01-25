import React, { useEffect } from "react";
import HeaderBar from "@components/HeaderBar";
import { Wrapper } from "../../Style/Wrapper";
// import ReactSearchBox from "react-search-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faThumbsUp,
  faPencil,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

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
  return (
    <>
      <HeaderBar />
      <Wrapper
        style={{
          height: "100%",
          width: "90%",
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
            <LeftOpt>
              <option key="banana" value="banana">
                축제 카테고리
              </option>
              <option key="apple" value="apple">
                축제 카테고리2
              </option>
              <option key="orange" value="orange">
                축제 카테고리3
              </option>
            </LeftOpt>
            <MiddleOpt>
              <option key="banana" value="banana">
                지역
              </option>
              <option key="apple" value="apple">
                지역2
              </option>
              <option key="orange" value="orange">
                지역3
              </option>
            </MiddleOpt>
            <RightOpt>
              <option key="banana" value="banana">
                월
              </option>
              <option key="apple" value="apple">
                일
              </option>
              <option key="orange" value="orange">
                달
              </option>
            </RightOpt>
          </MiddleSide>
          <BottomSide>
            {List &&
              [...Array(List?.length)].map((e, ind) => {
                const MainId = List[ind].festivalId;
                return (
                  <Link
                    to={`/???/${MainId}`}
                    style={{ textDecoration: "none", color: "black" }}
                    key={ind}
                  >
                    <FestivalList>
                      <ListTop>
                        <ListTopTitle>
                          [지역 축제] {List[ind].festivalName}
                        </ListTopTitle>
                        <ListTopGood>
                          <FontAwesomeIcon icon={faThumbsUp} />
                          {List[ind].likes}
                          <FontAwesomeIcon icon={faPencil} />
                          {List[ind].review}
                        </ListTopGood>
                      </ListTop>
                      <ListBottom>
                        <div>장소:{List[ind].holdingVenue}</div>
                        <div>
                          일시:{List[ind].startDate}~ {List[ind].finishDate}
                        </div>
                        <div>월: {List[ind].startDate.substring(5, 7)}월</div>
                      </ListBottom>
                    </FestivalList>
                    <div ref={ref} />
                  </Link>
                );
              })}

            <FestivalList>
              <ListTop>
                <ListTopTitle>[지역 축제] 어디 지역 딸기 축제</ListTopTitle>
                <ListTopGood>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  11
                  <FontAwesomeIcon icon={faPencil} />
                  11
                </ListTopGood>
              </ListTop>
              <ListBottom>
                <div>장소</div>
                <div>일시</div>
                <div>월</div>
              </ListBottom>
            </FestivalList>
          </BottomSide>
        </SearchMain>
      </Wrapper>
    </>
  );
};

export default Search;
