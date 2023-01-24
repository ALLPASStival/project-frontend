import styled from "@emotion/styled";
import { OrangeBox } from "../../Style/OrangeBox";
import { StyledDivColumn, StyledDivRow } from "../../Style/FlexBox";

export const Span = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const Calendar = styled(StyledDivRow)`
  height: 64rem;
  width: 91.3rem;
  flex-wrap: wrap;
`;

export const DateBox = styled(StyledDivColumn)`
  height: 11.9rem;
  width: 9rem;
  background-color: ${(props: any) =>
    props.id % 2 == 0 ? "#F5A547" : "#FDC88A"};
  border-radius: 2rem;
  font-size: 3rem;
  font-weight: bold;
  justify-content: flex-start;
  padding: 2rem;
`;

export const DetailInfo = styled(StyledDivColumn)`
  height: 75rem;
  width: 44.7rem;
  background-color: #ffdd95;
  border-radius: 2rem;
  padding-top: 5rem;
  margin-left: 2.4rem;
  align-items: center;
  justify-content: flex-start;
`;

export const Info = styled.span`
  font-size: 2.3rem;
  margin: 1rem 3rem 1rem 3rem;
`;

export const OrangeBtn = styled.button`
  font-size: 2rem;
  height: 4.8rem;
  padding: 0rem 5rem 0rem 5rem;
  margin: 1rem;
  border: none;
  background-color: #f5a547;
  border-radius: 3rem;
`;
