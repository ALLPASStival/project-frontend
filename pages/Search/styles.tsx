import styled from "@emotion/styled";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";

export const SearchMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  margin-top: 3rem;
`;
export const TopTitle = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
`;

export const TopSearchBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const MiddleSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  height: 10rem;
`;
export const LeftOpt = styled.select`
  width: 42rem;
  height: 5rem;
  text-align-last: center;
  text-align: center;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  border: 2.5px solid #ffb763;
  color: #f0962f;
`;
export const MiddleOpt = styled.select`
  width: 42rem;
  height: 5rem;
  text-align-last: center;
  text-align: center;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  border: 2.5px solid #ffb763;
  color: #f0962f;
`;
export const RightOpt = styled.select`
  width: 42rem;
  height: 5rem;
  text-align-last: center;
  text-align: center;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  border: 2.5px solid #ffb763;
  color: #f0962f;
`;

export const BottomSide = styled.div``;
export const FestivalList = styled(StyledDivColumn)`
  width: 98%;
  height: 10rem;
  background-color: #e9e9e9;
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;
`;
export const ListTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const ListTopTitle = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
`;
export const ListTopGood = styled(StyledDivRow)`
  font-size: 2rem;
`;

export const ListBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.3rem;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
  }
  & div:first-child {
    width: 45rem;
    height: 4rem;
    background-color: #ffbd71;
    border-radius: 10px;
  }
  & div:nth-child(2) {
    width: 50rem;
    height: 4rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
  & div:last-child {
    width: 23rem;
    height: 4rem;
    background-color: #ffbd71;
    border-radius: 10px;
  }
`;

export const TopSearch = styled.div`
  width: 20rem;
  height: 3rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
`;
