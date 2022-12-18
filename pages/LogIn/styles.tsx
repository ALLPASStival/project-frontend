import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffb763;
`;
export const Header = styled.div`
  font-weight: bolder;
  font-size: 5em;
  letter-spacing: -0.75px;
  margin-bottom: 0.8rem;
`;
export const SubHeader = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  letter-spacing: -0.75px;
  margin-bottom: 1.3rem;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Lable = styled.div`
  margin-bottom: 0.8rem;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    width: 7rem;
  }
`;
export const Input = styled.input`
  background-color: #d9d9d9;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 30rem;
  height: 5rem;
  outline: none;
  font-size: 1.5rem;
  padding: 10px 0 12px;
  margin-top: 1.5rem;
  :focus {
    border-bottom: 2px solid black;
  }
  ::placeholder {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  & span {
    padding: 0.5rem;
    color: #7d5a31;
    & a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  width: 9rem;
  height: 2.7rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #f93011;
    border: none;
  }
`;
