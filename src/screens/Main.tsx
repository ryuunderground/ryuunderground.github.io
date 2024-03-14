import styled from "styled-components";
import Dummy from "../img/past/10.jpg";
import Logo from "../img/mklogotp.png";

const MainContainer = styled.div``;

const Album = styled.ul`
  height: calc(4 * var(--mobile-screen));
`;

const Photo = styled.li``;

const IMGContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: var(--mobile-screen);
  background-color: white;
  box-sizing: border-box;
`;

const IMGFrame = styled.div`
  display: flex;
  width: 90vw;
  height: calc(90vw * 4 / 3);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 2vh;
`;

const MainIMG = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-color: white;
  width: 100%;
  height: auto;
`;

const LogoArea = styled.li`
  display: flex;
  width: 100vw;
  height: calc(var(--mobile-screen) - (90vw * 4 / 3));
  justify-content: flex-end;
  align-items: center;
  padding-right: 5vw;
`;

const LogoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
`;

const LogoIMG = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

function Main() {
  return (
    <>
      <MainContainer className="container">
        <Album className="unordered_lists">
          <Photo className="list">
            <IMGContainer>
              <IMGFrame>
                <MainIMG src={Dummy} />
              </IMGFrame>
              <LogoArea>
                <LogoFrame>
                  <LogoIMG src={Logo} />
                </LogoFrame>
              </LogoArea>
            </IMGContainer>
          </Photo>
          <Photo className="list">
            <IMGContainer>
              <IMGFrame>
                <MainIMG src={Dummy} />
              </IMGFrame>
              <LogoArea>
                <LogoFrame>
                  <LogoIMG src={Logo} />
                </LogoFrame>
              </LogoArea>
            </IMGContainer>
          </Photo>
          <Photo className="list">
            <IMGContainer>
              <IMGFrame>
                <MainIMG src={Dummy} />
              </IMGFrame>
              <LogoArea>
                <LogoFrame>
                  <LogoIMG src={Logo} />
                </LogoFrame>
              </LogoArea>
            </IMGContainer>
          </Photo>
          <Photo className="list">
            <IMGContainer>
              <IMGFrame>
                <MainIMG src={Dummy} />
              </IMGFrame>
              <LogoArea>
                <LogoFrame>
                  <LogoIMG src={Logo} />
                </LogoFrame>
              </LogoArea>
            </IMGContainer>
          </Photo>
        </Album>
      </MainContainer>
    </>
  );
}

export default Main;
