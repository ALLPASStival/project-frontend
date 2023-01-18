import styled from "@emotion/styled";
import { StyledDivCenter } from "../../Style/FlexBox";

export const SearchBox = styled(StyledDivCenter)`
  width: 42.5rem;
  height: 6.5rem;
  border-radius: 3.5rem;
  background-color: #FE9010;
  justify-content: space-around;

  & input {
    width: 27rem;
    height: 5.5rem;
    border: none;
    background-color: #FE9010;
    font-size: 2rem;
  }
`;


export const Category = styled(StyledDivCenter)`
background-color: #FFDD95;
font-size: 3.2rem;
font-weight: bold;
flex: 1;
height: 6.6rem;

&.select {
    background-color: #FE9010;
}
`