import styled from "@emotion/styled";
import { StyledDivCenter } from "./FlexBox";

export const OrangeBox = styled(StyledDivCenter)`
  height: 6rem;
  background-color: #fe9010;
  border-radius: 3rem;
  margin-bottom: 2.5rem;
  justify-content: space-evenly;

  & span {
    font-size: 2.3rem;
  }
`;
