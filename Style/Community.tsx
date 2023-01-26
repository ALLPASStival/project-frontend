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

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const CommentTable = styled.table`
  width: 100%;
  border-spacing: 3rem;
  border: 1px gray solid;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 2.4rem;
`;

export const Block = styled.div`
  border-top: 1px solid #807979;
  border-bottom: 1px solid #807979;
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #d0cfcf;
  width: 17.7rem;

  padding: 1rem;
`;
export const Right = styled.td`
  padding-left: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 60rem;
  vertical-align: center;

  & select {
    width: 20rem;
    height: 3rem;
    font-weight: bold;
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 3.8rem;
  padding-right: 4rem;
`;

export const OrgBtn = styled.button`
  font-size: 2.5rem;
  background-color: #fe9010;
  width: 16.2rem;
  height: 4.8rem;
  border-radius: 3rem;
  border: none;
  margin-right: 3rem;
`;
