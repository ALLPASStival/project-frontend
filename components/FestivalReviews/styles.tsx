import styled from "@emotion/styled";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";

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
export const MiddleBox = styled(StyledDivRow)`
  width: 104%;
  height: 9rem;
  color: black;
  border-radius: 12px;
  border: 5px solid #7084ab;
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;

  & span {
    width: 50%;
    text-align: center;
    color: #7084ab;
  }

  & div {
    border-bottom: 5px solid #7084ab;
    height: 1rem;
    width: 100%;
  }
`;

export const Rank = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 1rem;
  background-color: #6a758e;
  padding: 2%;
  border-radius: 2rem;
  & img {
    width: 25rem;
    height: 35rem;
  }
`;
