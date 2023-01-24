import styled from "@emotion/styled";
import React from "react";

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
  margin-bottom: 0.5rem;
`;
export const LeftOpt = styled.select`
  width: 35rem;
  height: 5rem;
  background-color: #ffb763;
  text-align-last: center;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 5px;
`;
export const MiddleOpt = styled.select`
  width: 35rem;
  height: 5rem;
  background-color: #ffb763;
  text-align-last: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
`;
export const RightOpt = styled.select`
  width: 35rem;
  height: 5rem;
  background-color: #ffb763;
  text-align-last: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
`;

export const BottomSide = styled.div``;
export const FestivalList = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
export const ListTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 0.5rem;
`;
export const ListTopTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const ListTopGood = styled.div`
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
    font-weight: bold;
    font-size: 2rem;
  }
  & div:first-child {
    width: 23rem;
    height: 4rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
  & div:nth-child(2) {
    width: 55rem;
    height: 4rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
  & div:last-child {
    width: 23rem;
    height: 4rem;
    background-color: #fe9010;
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
