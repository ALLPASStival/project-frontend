import styled from "@emotion/styled";
import { StyledDivCenter } from "./FlexBox";

export const SearchBox = styled(StyledDivCenter)`
  width: 42.5rem;
  height: 6.5rem;
  border-radius: 3.5rem;
  background-color: #fe9010;
  justify-content: space-around;

  & input {
    width: 27rem;
    height: 5.5rem;
    border: none;
    background-color: #fe9010;
    font-size: 2rem;
  }
`;

export const Category = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  padding-left: 5rem;
  padding-bottom: 3rem;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 2.4rem;
`;

export const Block = styled.tr`
  border-top: 1px solid #807979;
  border-bottom: 1px solid #807979;
`;

export const Left = styled.td`
  font-weight: bold;
  background-color: #d0cfcf;
  width: 17.7rem;
  text-align: center;
  padding: 1rem;
`;
export const Right = styled.td`
  padding-left: 3rem;
`;

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 3.8rem;
  padding-right: 4rem;
`;

export const OrgBtn = styled.button`
  font-weight: bold;
  font-size: 2.5rem;
  background-color: #fe9010;
  width: 16.2rem;
  height: 4.8rem;
  border-radius: 3rem;
  border: none;
`;
