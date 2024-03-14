import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

const LoginContainer = styled.div``;

const LoginGNB = styled.h1``;

const LoginForm = styled.form``;
const LoginLabel = styled.label``;
const LoginInput = styled.input``;
const BTNs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GoToRegister = styled.button`
  border: 1px solid black;
  font-size: 3rem;
  background-color: transparent;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const LoginBTN = styled(GoToRegister)``;

function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const LoginSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(`${email} and ${pw}`);
  };

  return (
    <>
      <LoginContainer className="container">
        <LoginGNB className="gnb">로그인</LoginGNB>
        <LoginForm className="form" onSubmit={LoginSubmit}>
          <LoginLabel className="label">
            이메일
            <br />
            <LoginInput
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </LoginLabel>
          <LoginLabel className="label">
            비밀번호
            <br />
            <LoginInput
              className="input"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              required
            />
          </LoginLabel>
          <BTNs>
            <GoToRegister>
              <Link to={"/register"} type="submit">
                회원가입
              </Link>
            </GoToRegister>
            <LoginBTN type="submit">로그인</LoginBTN>
          </BTNs>
        </LoginForm>
      </LoginContainer>
    </>
  );
}

export default Login;
