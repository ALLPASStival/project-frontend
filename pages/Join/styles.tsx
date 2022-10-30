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
  font-size: 3em;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`;
export const SubHeader = styled.div`
  font-weight: bolder;
  font-size: 1.2rem;
  letter-spacing: -0.75px;
  margin-bottom: 2rem;
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Lable = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    width: 7rem;
  }
`;

export const Input = styled.input`
  background-color: #ffff;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 20rem;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 12px;
  margin-top: 0.6rem;
  :focus {
    border-bottom: 2px solid black;
  }
`;

export const Input2 = styled.input`
  background-color: #ffff;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  width: 16rem;
  height: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px 0 12px;
  margin-top: 0.6rem;

  :focus {
    border-bottom: 2px solid black;
  }
`;

export const CheckBtn = styled.div`
  vertical-align: middle;
  text-align: center;
  width: 3.8rem;
  height: 3rem;
  background-color: #cc6600;
  color: whitesmoke;
  outline: none;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f93011;
    border: none;
  }
`;

export const JoinBtn = styled.div`
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
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f93011;
    border: none;
  }
`;

export const title = styled.div``;
