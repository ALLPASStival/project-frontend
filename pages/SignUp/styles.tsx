import styled from "@emotion/styled";

export const Div = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 2rem;

  & div:first-child {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 10rem;
  }
`;

export const Label2 = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  & div:first-child {
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;

    width: 10rem;
  }

  & div:last-child {
    width: 35rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.5rem;
    gap: 1rem;
    margin-top: 0.5rem;
  }
`;

export const InputGender = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const Input = styled.input`
  background-color: #fffcfc;
  position: relative;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  width: 35rem;
  height: 4rem;
  outline: none;
  font-size: 1.5rem;
  padding: 10px 15px 12px;
  margin-top: 0.6rem;
  :focus {
    border: 1px solid #e89735;
  }
  ::placeholder {
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

export const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  width: 35rem;
  height: 4rem;
  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: #f93011;
    border: none;
  }
`;

export const Error = styled.div`
  color: red;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Correct = styled.div`
  color: green;
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CheckBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  width: 10rem;
  height: 2rem;

  background-color: #fe9010;
  color: black;
  border-radius: 25px;
  outline: none;
  font-size: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1.8rem;

  position: absolute;
  top: 1.2rem;
  right: 1rem;

  &:hover {
    background-color: #f93011;
    border: none;
  }
`;
