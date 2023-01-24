import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TopLeft = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const MiddleBox = styled.button`
  width: 100%;
  height: 5rem;
  background-color: #7084ab;
  color: black;
  border-radius: 12px;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
export const Rank = styled.div`
  & img {
    width: 15rem;
    height: 20rem;
  }
`;
