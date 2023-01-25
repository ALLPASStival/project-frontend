import styled from "@emotion/styled";
import { StyledDivColumn } from "../../Style/FlexBox";

export const Wrapper = styled(StyledDivColumn)`
  align-items: center;
`;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const TopRight = styled.button`
  width: 20rem;
  height: 5rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f93011;
  }
`;

export const Rank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #6a758e;
  padding: 2%;
  width: 100%;
  border-radius: 2rem;
  & img {
    width: 25rem;
    height: 35rem;
  }
`;
export const RankBox = styled.div`
  font-size: 3rem;
  background-color: #d9d9d9;
  color: #fe9010;
  width: 20rem;
  height: 25rem;

  margin: 1rem;
`;
