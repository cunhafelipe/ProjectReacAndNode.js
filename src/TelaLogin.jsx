import { useState } from "react";
import styled from "styled-components";
import "./css/TelaLogin.css";

function TelaLogin() {
  return (
    <>
      <Form>
        <Fieldset>
          <Legend>Login</Legend>
          <DivEmail>
            <LabelEmail htmlFor="email">E-mail</LabelEmail>
            <InputEmail
              type="email"
              id="email"
              placeholder="example@example.com"
            />
          </DivEmail>
          <DivPassword>
            <LabelPassword htmlFor="" id="passoword">
              Password
            </LabelPassword>
            <InputPassword type="password" placeholder="8 character minimum" />
          </DivPassword>
        </Fieldset>
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}

const Form = styled.form`
  max-width: 400px;
  margin: 80px auto;

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const Fieldset = styled.fieldset`
  border: none;
`;

const Legend = styled.legend`
  color: #7d83b9;
  font-size: 20px;
  font-weight: 700;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    top: 30px;
    background: #636899;
  }
`;

const DivEmail = styled.div`
  margin-top: 70px;
`;

const LabelEmail = styled.label`
  color: #dbdbdb;
  font-weight: 500;
  letter-spacing: 1.4px;
`;

const InputEmail = styled.input`
  width: 100%;
  margin-top: 5px;
  border: none;
  padding: 8px;
  font-family: "IBM Plex Mono", sans-serif;
  border-radius: 5px;
  background-color: #444658;
  color: #bbbaba;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: 0;
  }
`;
const DivPassword = styled.div`
  margin-top: 15px;
`;

const LabelPassword = styled.label`
  color: #dbdbdb;
  font-weight: 500;
  letter-spacing: 1.4px;
`;

const InputPassword = styled.input`
  width: 100%;
  margin-top: 5px;
  border: none;
  padding: 8px;
  font-family: "IBM Plex Mono", sans-serif;
  border-radius: 5px;
  background-color: #444658;
  color: #bbbaba;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  background: #7d83b9;
  border: none;
  border-radius: 5px;
  color: #dbdbdb;
  font-weight: 900;

  &:hover {
    background-color: #6b71a5;
    cursor: pointer;
    transition: 0.7s;
  }
`;

export default TelaLogin;
