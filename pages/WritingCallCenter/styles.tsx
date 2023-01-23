import styled from "@emotion/styled";

export const Form = styled.form``;
export const CommunityContainer = styled.div`
  width: 100%;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
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
export const BlockInPut = styled.input`
  padding-left: 3rem;
  font-weight: bold;
  border: none;
  width: 50.7rem;
  text-align: left;
  font-size: 1.5rem;

  :focus {
    outline: none;
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
  font-weight: bold;
  font-size: 2.5rem;
  background-color: #fe9010;
  width: 16.2rem;
  height: 4.8rem;
  border-radius: 3rem;
  border: none;
`;
