import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledDivCenter, StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";

export const ProfileBg = styled(StyledDivCenter)`
background-color:#D9D9D9;
width: 40.7rem;
height: 40.7rem;
border-radius: 50%;
flex-direction: column;
margin-bottom: 4.7rem;

& span {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 3rem;
}
`;

export const UserIcon = styled(FontAwesomeIcon)`
color: black;
width: 20rem;
height: 20rem;
`

export const OrangeSpan = styled.span`
 font-size: 2rem;
 opacity: 0.5;
`

export const CatBar = styled(StyledDivRow)`
border-bottom: 0.4rem solid #EC9127;
height: 5.36rem;
width: 100%;
justify-content: space-around;

& button {
    font-size: 2.5rem;
    font-weight: bold;
    border-style: none;
    background-color: white;
}
`

export const OneFes = styled(StyledDivColumn)`
height: 7.5rem;
width: 73.4rem;
background-color: #D9D9D9;
padding: 3rem;
margin-top: 4.2rem;

& span {
    font-size: 2.5rem;
    font-weight: bold;
}

`

export const FirstRow = styled(StyledDivRow)`
justify-content: space-between;
margin-bottom: 1.8rem;
`

export const SecondRow = styled(StyledDivRow)`
justify-content: space-between;

& span {
    font-size: 2.5rem;
    font-weight: bold;
    background-color: #FE9010;
    padding: 1.3rem;
    border-radius: 3rem;
    
}

`