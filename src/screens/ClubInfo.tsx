import styled from "styled-components";

const ClubInfocontainer = styled.div``;

const ClubInfoGNB = styled.h1``;

const Informations = styled.ul`
  height: calc() (400vh - 135rem);
`;
const InfoSlide = styled.li`
  height: auto !important;
`;

const InfoTitle = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  padding: 5vw;
  width: 100vw;
`;
const InfoP = styled.p`
  font-size: 3rem;
  font-weight: 300;
  padding: 4rem;
`;
const RuleBTN = styled.button`
  width: 60%;
  min-width: 30rem;
  height: 5rem;
  font-size: 3rem;
  background-color: transparent;
  color: var(--dark-brown);
  margin: 2rem 0 0 1rem;
`;

function Clubinfo() {
  return (
    <div id="GlobalContainer">
      <ClubInfocontainer className="container">
        <ClubInfoGNB className="gnb">클럽 소개</ClubInfoGNB>
        <Informations className="unordered_list">
          {/* 백엔드한테 서버에 내용 올려주고, map으로 깔기, 기본 틀은 대충 아래와 같이
        ClubInfo.map((InfoTitle, InfoIMG, InfoP index) => (
        <InfoSlide className="list" key={index}>
        <InfoTitle>{InfoTitle}</InfoTitle>
          <hr /><InfoIMG src={InfoIMG}/>
          <hr />
          <InfoP>{InfoP}
          </InfoP>
        </InfoSlide>
        );
        */}
          <InfoSlide className="list">
            <br />
            <InfoTitle>마술인들의 놀이터, 매직클럽입니다.</InfoTitle>
            <hr />
            <InfoP>
              2019년, 대학 마술 동아리를 위한 단체가 있었습니다.
              <br /> 동아리 부원들의 니즈를 맞춰주는 것 이상으로 더 많은
              사람들과 활동하고자 합니다. 더 자유롭고, 더 활기차게
            </InfoP>
          </InfoSlide>
          <InfoSlide className="list">
            <br />
            <InfoTitle>가입 자격은 어떻게 되나요?</InfoTitle>
            <hr />
            <InfoP>
              마술에 관심과 열정이 있는 성인이면 모두 가능합니다.
              <br />
              <br /> 미성년자분들껜 죄송하지만, 저희가 아직 여러분을 담기에
              부족합니다. 우리 모두 성장해서 다시 만나요.
            </InfoP>
          </InfoSlide>
          <InfoSlide className="list">
            <br />
            <InfoTitle>왜 매직클럽에 가입해야하나요?</InfoTitle>
            <hr />
            <InfoP>
              혼자서 마술을 하기란 쉽지 않습니다.
              <br />
              <br />
              매직클럽은 여러분들과 마술을 배우고, 사람을 배우고, 무대에 오르는
              그 모든 과정에 함께 합니다.
            </InfoP>
          </InfoSlide>
          <InfoSlide className="list">
            <br />
            <InfoTitle>회칙</InfoTitle>
            <hr />
            <InfoP>
              세 줄 요약 <br />
              1. 가입 1. 가입 신청 후 입금 시 정회원 승격. 단, 24년 8월까진 무료{" "}
              <br />
              2. 정회원 자격은 1년 후 갱신 필요 <br />
              3. 생각하고 생각하고 생각한 다음에 말하고 행동하기 <br />
              <RuleBTN>회칙 전문 보러가기</RuleBTN>
            </InfoP>
          </InfoSlide>
        </Informations>
      </ClubInfocontainer>
    </div>
  );
}

export default Clubinfo;
