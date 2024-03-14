import styled from "styled-components";
import { Link } from "react-router-dom";
import Eventicon from "../img/events.png";
import Introicon from "../img/into.png";
import Mypageicon from "../img/my_page.png";
import MyPage from "../screens/Mypage";

const FooterConatiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 100%;
  height: var(--footer-height);
  background-color: var(--cream);
  bottom: 0;
  border: 1px solid var(--border);
  box-sizing: border-box;
`;

const Menus = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;
const Menu = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  box-sizing: border-box;
`;
const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const MenuSpan = styled.span`
  font-size: 3rem;
`;

function Footer() {
  return (
    <FooterConatiner>
      <Menus>
        <Menu>
          <Link to={"/club_info"}>
            <MenuSpan>
              <Icon src={Introicon} />
            </MenuSpan>
          </Link>
        </Menu>

        <Menu>
          <Link to={"/my_page"} id="Logo">
            <MenuSpan>
              <Icon src={Mypageicon} />
            </MenuSpan>
          </Link>
        </Menu>

        <Menu>
          <Link to={"/event"}>
            <MenuSpan>
              <Icon src={Eventicon} />
            </MenuSpan>
          </Link>
        </Menu>
      </Menus>
    </FooterConatiner>
  );
}

export default Footer;
