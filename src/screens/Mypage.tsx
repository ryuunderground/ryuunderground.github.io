import { useState, useEffect, FormEvent } from "react";
import { FormEncType } from "react-router-dom";
import styled from "styled-components";

const MyPageContainer = styled.div``;

const StaticInfos = styled.div`
  width: 100%;
  height: 25vh;
  margin: 0rem;
  display: flex;
  flex-direction: column;
  padding: 4rem 5vw;
  font-size: 3rem;
  line-height: 5rem;
`;

const StaticInfo = styled.span``;

const UpdateForm = styled.form`
  padding-bottom: 15rem !important;
`;

const UpdateHeader = styled.h1`
  font-size: 3rem;
`;

const UpdateLabel = styled.label`
  font-size: 2.5rem;
`;

const UpdateInput = styled.input``;
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

const UpdateBTN = styled.button`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 5rem;
  right: 5vw !important;
  bottom: 5%;
`;

function MyPage() {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [newPw, setNewPW] = useState("");
  const [pwCheck, setPWCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [secondDigit, setSecondDigit] = useState("");
  const [lastDigit, setLastDigit] = useState("");

  const UpdateAccount = (event: FormEvent) => {
    event.preventDefault();
    if (newPw !== pwCheck) {
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
    console.log("Formatted Phone Number:", phoneNumberData);
    const data = {
      email: email,
      newPassword: newPw,
      phoneNumber: phoneNumberData,
    };
  };
  return (
    <>
      <MyPageContainer className="container">
        <StaticInfos>
          <StaticInfo>이름: 홍길동</StaticInfo>
          <StaticInfo>회원 등급: 정회원</StaticInfo>
        </StaticInfos>

        <UpdateForm className="form" onSubmit={UpdateAccount}>
          <UpdateHeader>개인정보 변경</UpdateHeader>
          <br />
          <UpdateLabel className="label">
            이메일
            <br />
            <UpdateInput
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </UpdateLabel>
          <hr />
          <UpdateLabel className="label">
            이전 비밀번호
            <br />
            <UpdateInput
              className="input"
              type="text"
              value={pw}
              onChange={(e) => setPW(e.target.value)}
              required
            />
          </UpdateLabel>
          <hr />
          <UpdateLabel className="label">
            새 비밀번호, !@*&-_ 포함 8~16자 알파벳
            <br />
            <UpdateInput
              className="input"
              type="password"
              value={newPw}
              onChange={(e) => setNewPW(e.target.value)}
              pattern="^[a-z\d!@*&-_]{8,16}$"
              required
            />
          </UpdateLabel>
          <hr />
          <UpdateLabel className="label">
            새로운 비밀번호 확인
            <br />
            <UpdateInput
              className="input"
              type="password"
              value={pwCheck}
              onChange={(e) => setPWCheck(e.target.value)}
              required
            />
          </UpdateLabel>
          <hr />
          <UpdateLabel className="label">
            새 전화번호
            <br />
            <PhoneNumber>
              <FirstDigit className="input">010</FirstDigit>
              -
              <UpdateInput
                className="input phone_number"
                type="text"
                value={secondDigit}
                onChange={(e) => setSecondDigit(e.target.value)}
                maxLength={4}
                required
              />
              -
              <UpdateInput
                className="input phone_number"
                type="text"
                maxLength={4}
                value={lastDigit}
                onChange={(e) => setLastDigit(e.target.value)}
                required
              />
            </PhoneNumber>
          </UpdateLabel>

          <UpdateBTN className="submit_btn" type="submit">
            개인정보 변경
          </UpdateBTN>
        </UpdateForm>
      </MyPageContainer>
    </>
  );
}

export default MyPage;
