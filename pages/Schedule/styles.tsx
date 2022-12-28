import styled from "@emotion/styled";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";

export const Span = styled.span`
font-size: 3rem;
font-weight: bold;
`

export const Calendar = styled(StyledDivRow)`
height: 64rem;
width: 91.3rem;
flex-wrap: wrap;
`

export const DateBox = styled(StyledDivColumn)`
height: 11.9rem;
width: 9rem;
background-color: ${(props: any) => ((props.id % 2 == 0) ? "#F5A547" : "#FDC88A" )};
border-radius: 2rem;
font-size: 3rem;
font-weight: bold;
justify-content: flex-start;
padding: 2rem
`

export const DetailInfo = styled(StyledDivColumn)`
height: 53.6rem;
width: 34.7rem;
background-color: #FFDD95;
border-radius: 2rem;
padding: 5rem;
margin-left: 2.4rem;
`

export const Info = styled.span`
font-size: 2.5rem;
font-weight: bold;
`