import React from "react";
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
import FestivalReviews from "@components/FestivalReviews";
import { StyledDivRow } from "../../Style/FlexBox";

const Search = () => {
  // const data = [
  //   {
  //     key: "john",
  //     value: "John Doe",
  //   },
  //   {
  //     key: "jane",
  //     value: "Jane Doe",
  //   },
  //   {
  //     key: "mary",
  //     value: "Mary Phillips",
  //   },
  //   {
  //     key: "robert",
  //     value: "Robert",
  //   },
  //   {
  //     key: "karius",
  //     value: "Karius",
  //   },
  // ];

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
        <FestivalReviews />
      </Wrapper>
    </>
  );
};

export default Search;
