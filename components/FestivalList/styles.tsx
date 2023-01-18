import styled from "@emotion/styled";

export const ListContainer = styled.div`
  width: 100%;
  height: 5rem;
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
  font-size: 1rem;
  font-weight: bold;
`;
export const ListTopGood = styled.div``;
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
  }
  & div:first-child {
    width: 12rem;
    height: 1.8rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
  & div:nth-child(2) {
    width: 26rem;
    height: 1.8rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
  & div:last-child {
    width: 12rem;
    height: 1.8rem;
    background-color: #fe9010;
    border-radius: 10px;
  }
`;
