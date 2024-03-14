import styled from "styled-components";
import { useState, useEffect, FormEvent } from "react";

const RegisterContainer = styled.div`
  justify-content: center;
  background-color: white;
  flex-direction: column;
  font-size: 2.5rem;
`;
const RegisterForm = styled.form`
  overflow-y: scroll;
  padding-bottom: 10rem;
`;
const RegisterLabel = styled.label`
  &:nth-child(12) {
    flex-direction: row;
    align-items: center;
    input {
      width: 5vw;
      height: 5vw;
    }
  }
`;
const RegisterInput = styled.input``;
const PhoneNumber = styled.div`
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-evenly;
  gap: 4vw;
`;
const FirstDigit = styled.div`
  width: 20vw;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
`;
const RegisterBTN = styled.button`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 5rem;
  right: 5vw !important;
  bottom: 5rem;
`;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [pwCheck, setPWCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [lastDigit, setLastDigit] = useState("");
  const [adultConsent, setAdultConsent] = useState(false);
  const RegisterSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!/[\W_]/.test(pw)) {
      alert("비밀번호에는 특수문자가 포함되어야 합니다.");
      return;
    }
    if (pw !== pwCheck) {
      alert("비밀 번호를 확인해주세요.");
      setPWCheck("");
      return;
    }
    if (!/^\d+$/.test(secondDigit) || !/^\d+$/.test(lastDigit)) {
      alert("전화 번호를 다시 확인해주세요.");

      setSecondDigit("");
      setLastDigit("");
      return;
    }
    const phoneNumberData = `010 - ${secondDigit} - ${lastDigit}`;
    const data = {
      name: name,
      email: email,
      password: pw,
      phone: phoneNumberData,
    };
    console.log(data);
  };
  const AdultConsentCheck = () => {
    setAdultConsent(!adultConsent);
    if (!adultConsent) {
      alert("미성년자의 허위 가입 발각 시 퇴장을 요구할 수 있습니다.");
    } else {
      alert(
        "미성년자들을 책임 질 수 있도록, 빠르게 성장하겠습니다. 미안합니다."
      );
    }
  };
  return (
    <>
      <RegisterContainer className="container">
        <RegisterForm className="form" onSubmit={RegisterSubmit}>
          <br />
          <RegisterLabel className="label">
            이름
            <RegisterInput
              className="input"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </RegisterLabel>
          <br />
          <RegisterLabel className="label">
            이메일
            <RegisterInput
              className="input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </RegisterLabel>
          <hr />
          <RegisterLabel className="label">
            비밀번호, !@*&-_ 포함 8~16자 알파벳
            <RegisterInput
              className="input"
              type="password"
              onChange={(e) => setPW(e.target.value)}
              pattern="^[a-z\d!@*&-_]{8,16}$"
              required
            />
          </RegisterLabel>
          <hr />
          <RegisterLabel className="label">
            비밀번호 확인
            <RegisterInput
              className="input"
              type="text"
              onChange={(e) => setPWCheck(e.target.value)}
              required
            />
          </RegisterLabel>
          <hr />
          <RegisterLabel className="label">
            전화번호
            <PhoneNumber>
              <FirstDigit className="input">010</FirstDigit>
              -
              <RegisterInput
                className="input phone_number"
                type="text"
                value={secondDigit}
                onChange={(e) => setSecondDigit(e.target.value)}
                maxLength={4}
                required
              />
              -
              <RegisterInput
                className="input phone_number"
                type="text"
                maxLength={4}
                value={lastDigit}
                onChange={(e) => setLastDigit(e.target.value)}
                required
              />
            </PhoneNumber>
          </RegisterLabel>
          <br />
          <RegisterLabel className="label">
            성인입니다.
            <br />
            <RegisterInput
              className="input checkbox"
              type="checkbox"
              checked={adultConsent}
              onChange={AdultConsentCheck}
              required
            />
          </RegisterLabel>
          <br />
          <RegisterBTN className="submit_btn" type="submit">
            회원가입
          </RegisterBTN>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
}

export default Register;
