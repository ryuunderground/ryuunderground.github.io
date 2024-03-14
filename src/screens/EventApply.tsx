import styled from "styled-components";
import Coming from "../img/coming.png";

const EventApplyContainer = styled.div`
  margin-top: 22.5rem;
  overflow-y: scroll;
`;
const EventApplyGNB = styled.div`
  z-index: 99 !important;
  padding-left: 5rem;
`;

const EventApplyForm = styled.form`
  height: auto;
  overflow: scroll;
  justify-content: flex-start;
  gap: 3rem;
  padding-top: 6rem;
  padding-bottom: 0 !important;
`;

const EventApplyInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
`;
const EventApplyIMGFrame = styled.div`
  width: 90vw;
  height: 90vw;
`;
const EventApplyIMG = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
const EventApplyP = styled.p`
  width: 90vw;
  font-size: 2.5rem;
  padding-top: 3rem;
`;
const EventApplyRefund = styled(EventApplyP)`
  font-size: 1.5rem;
  font-weight: 100;
  padding-top: 5rem;
`;
const EventApplyQ = styled.div`
  width: 100%;
  position: relative;
  font-size: 2.5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const EventApplyLabel = styled.label`
  font-size: 3rem;
  padding-left: 0;
  &:nth-child(5) {
    flex-direction: row;
    align-items: flex-start;
    input {
      width: 5vw;
      height: 5vw;
    }
  }
`;
const Agree = styled.span`
  max-width: 85vw;
`;
const EventApplyInput = styled.input`
  width: 90vw;
`;
const EventApplyAccount = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  gap: 1.5rem;
  color: var(--dark-brown);
`;
const EventApplyBTN = styled.button`
  display: flex;
  height: 7rem;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 5rem;
`;

function EventApply() {
  return (
    <EventApplyContainer className="container">
      <EventApplyGNB className="gnb">이벤트 이름</EventApplyGNB>
      <EventApplyForm className="form">
        <EventApplyInfo>
          <EventApplyIMGFrame>
            <EventApplyIMG src={Coming} />
          </EventApplyIMGFrame>
          <EventApplyP>
            일시: 202X.XX.XX
            <br />
            장소: XXXXXX
            <br />
            가격: XX,XXX
          </EventApplyP>
          <hr />
          <EventApplyP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum
            provident soluta facilis sequi odit itaque veniam ipsa deleniti,
            quam aliquam et laboriosam incidunt similique dicta vitae corporis
            optio nulla?
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            natus repudiandae voluptas omnis. Esse vel velit tempora error
            dolore excepturi qui laudantium veritatis odit alias? Mollitia
            explicabo non impedit eos!
          </EventApplyP>
          <hr />
          <EventApplyRefund>
            환불 규정
            <br />
            10일 전: 전액 환불
            <br />
            7일 전: 10%를 공제한 후 환불
            <br />
            3일 전: 20%를 공제한 후 환불
            <br />
            1일 전: 30%를 공제한 후 환불
            <br />
            모임 당일: 환불 불가. 단,예약 당일 취소일 경우 전액 환불
          </EventApplyRefund>
        </EventApplyInfo>
        <EventApplyQ>
          <EventApplyLabel className="label">
            참가 인원 (숫자만 기입)
            <EventApplyInput className="input" type="number" />
          </EventApplyLabel>
          <EventApplyLabel className="label">
            참가자 전원 이름 (홍길동, 김영희, 박철수)
            <EventApplyInput className="input" type="text" />
          </EventApplyLabel>
          <EventApplyAccount>
            <span>입금계좌</span>
            <span>카카오뱅크 3333-23-1304529</span>
          </EventApplyAccount>
          <hr />
          <EventApplyLabel className="label">
            <Agree>모든 안내 사항을 확인하고 동의합니다.</Agree>
            <EventApplyInput className="input" type="checkbox" />
          </EventApplyLabel>
          <EventApplyBTN className="submit_btn">제출하기</EventApplyBTN>
        </EventApplyQ>
      </EventApplyForm>
    </EventApplyContainer>
  );
}

export default EventApply;
