import GlobalStyles from "./components/Reset";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HumanIMG from "./img/humanicon.png";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const LogoContainer = styled.div`
  width: 15rem;
  height: 15rem;
  min-height: 200px;
  z-index: 99;
  border: 1px solid var(--border);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 10%);
  background-color: var(--cream);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HumanIcon = styled.img`
  width: 100%;
`;
function App() {
  return (
    <Page>
      <Header />
      <GlobalStyles />
      <Outlet />
      <Footer />
    </Page>
  );
}

export default App;
