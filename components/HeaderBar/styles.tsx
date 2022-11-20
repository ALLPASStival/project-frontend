import styled from "@emotion/styled";

export const Bar = styled.div`
  background-color: #34435b;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const MainBar = styled.div`
  padding: 0.5rem 3rem;

  & span a {
    text-decoration: none;
    color: inherit;
  }
`;

export const TopMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 0.5fr;
  align-items: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  & span {
    margin-left: 1rem;
    cursor: pointer;
  }
`;

export const LeftMenu = styled.div`
  margin-left: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #fe9010;
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;

  & span {
    color: #fe9010;
    font-weight: bold;
    font-size: 1.3rem;

    & span {
      display: flex;
      flex-direction: column;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;
export const SubBar = styled.div`
  padding: 0.8rem 2rem;

  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  & div {
    display: flex;
    align-items: center;
  }

  & span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fe9010;
    margin-left: 2rem;
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;
