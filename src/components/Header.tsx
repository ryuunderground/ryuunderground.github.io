import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoIMG from "../img/mklogotp.png";
import axios from "axios";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  min-height: 200px;
  position: absolute;
  top: 0rem;
  border: 1px solid black;
  background-color: var(--cream);
  padding: 0 2rem;
  z-index: 99;
`;

const MainLogo = styled.img`
  width: 190px;
  height: 190px;
  max-height: 12rem;
  z-index: 99;
  position: absolute;
  top: 0;
  left: 5%;
`;
const MyPageGNB = styled.h1`
  letter-spacing: 0.5rem;
  padding-left: 5vw;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <MainLogo src={LogoIMG} alt="Main Logo" />
      </Link>
      {/* 추후 업데이트 헤더에 메인 페이지 표시
      <Link to={"/my_page"}></Link>
      */}
      <MyPageGNB className="gnb">GNB</MyPageGNB>
    </HeaderContainer>
  );
}

export default Header;
