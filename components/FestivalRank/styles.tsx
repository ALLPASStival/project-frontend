import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export const TopRight = styled.button`
  width: 10rem;
  height: 2.7rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f93011;
  }
`;

export const Rank = styled.div`
  display: flex;
  justify-content: center;
`;
export const RankBox = styled.div``;
