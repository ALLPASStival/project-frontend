import styled from "@emotion/styled";
import { StyledDivCenter } from "../../Style/FlexBox";

export const Category = styled(StyledDivCenter)`
  background-color: #ffdd95;
  font-size: 2.5rem;

  flex: 1;
  height: 5.5rem;

  &.select {
    background-color: #fe9010;
  }
`;
