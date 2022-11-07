import styled from "@emotion/styled";

export const Bar = styled.div`
  background-color: #34435b;
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const SubBar = styled.div`
  padding: 0.5rem 3rem;

  & span a {
    text-decoration: none;
    color: inherit;
  }
`;

export const SubMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & span {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
