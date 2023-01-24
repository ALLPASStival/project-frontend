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
  height: 9.5rem;
  background-color: #7084ab;
  color: black;
  border-radius: 12px;
  border: none;
  font-size: 3.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Rank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  & img {
    width: 27rem;
    height: 40rem;
  }
`;
