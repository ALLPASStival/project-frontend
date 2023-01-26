import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  StyledDivCenter,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/FlexBox";

export const ProfileBg = styled(StyledDivCenter)`
  background-color: #d9d9d9;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  flex-direction: column;
  margin-bottom: 2.6rem;

  & span {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 3rem;
  }
`;

export const UserIcon = styled(FontAwesomeIcon)`
  color: black;
  width: 12rem;
  height: 15rem;
`;

export const UserSpan = styled.span`
  width: 15.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserInput = styled.input`
  border: none;
  width: 15.5rem;
  height: 3rem;
  font-size: 2.5rem;
  background-color: #fe9010;
  border-bottom: dashed 0.25rem;
`;

export const OrangeSpan = styled.span`
  font-size: 2rem;
  opacity: 0.5;
`;

export const CatBar = styled(StyledDivRow)`
  border-bottom: 0.4rem solid #ec9127;
  height: 5.36rem;
  width: 100%;
  justify-content: space-around;

  & button {
    font-size: 2.5rem;
    font-weight: bold;
    border-style: none;
    background-color: white;
    &.select {
      color: #e98715;
    }
  }
`;

export const OneFes = styled(StyledDivColumn)`
  height: 7.5rem;
  width: 73.4rem;
  background-color: #d9d9d9;
  padding: 3rem;
  margin-top: 3.1rem;

  & span {
    font-size: 2.2rem;
  }
`;

export const FirstRow = styled(StyledDivRow)`
  justify-content: space-between;
  margin-bottom: 1.8rem;
`;

export const SecondRow = styled(StyledDivRow)`
  justify-content: space-between;

  & span {
    font-size: 2.5rem;
    background-color: #fe9010;
    padding: 1.3rem;
    border-radius: 3rem;
  }
`;

export const FesWrapper = styled(StyledDivColumn)`
  width: 137.4rem;
  height: 36.2rem;
  background-color: #ffd29c;
  flex-wrap: wrap;

  & span {
    font-size: 2.5rem;
    font-weight: bold;
    padding-left: 3rem;
  }
`;
