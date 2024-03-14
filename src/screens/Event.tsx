import styled from "styled-components";
import { Link } from "react-router-dom";
import Comming from "../img/coming.png";

const EventsContainer = styled.div``;

const EventsHeader = styled.h1``;

const EventList = styled.li``;

const EventPosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px solid black;
`;

const EventPoster = styled.div`
  align-items: center;
  object-fit: contain;
  border: 2px solid var(--border);
  /* margin: 2rem; */
  width: 90vw !important;
  height: 90vw !important;
`;

const EventTitle = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  padding: 3rem 0;
  padding-left: 5vw !important;
  box-sizing: border-box;
`;
const EventInfoContainer = styled.div`
  width: 90%;
  height: 30%;
  padding: 5rem 0;
`;
const EventInfo = styled.p`
  width: 100%;
  font-size: 3rem;
  font-weight: 300;
  flex-wrap: nowrap;
  padding-left: 5vw;
`;
const CommingIMG = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

function Event(
  {
    /* title, poster, info */
  }
) {
  const Events = styled.ul`
    height: calc(300vh - 102rem);
  `;
  return (
    <>
      <EventsContainer className="container">
        <EventsHeader className="gnb">이벤트 목록</EventsHeader>
        <Events className="unordered_list">
          <EventList className="list">
            <Link to={"/event_apply"}>
              <EventTitle>Monn&Tree x Magicclub Close-up Workshop</EventTitle>
              <EventPosterContainer>
                <EventPoster>
                  <CommingIMG src={Comming} />
                </EventPoster>
              </EventPosterContainer>
              <EventInfoContainer>
                <EventInfo>
                  장소: 블라인드 아트홀 <br />
                  일시: 2024. 04. 06. 18:00 ~ 20:00 <br />
                  인원: ~ 40명 <br />
                  참가비: 무료
                </EventInfo>
              </EventInfoContainer>
            </Link>
          </EventList>
          <EventList className="list">
            <Link to={"/event_apply"}>
              <EventTitle>Party</EventTitle>
              <EventPosterContainer>
                <EventPoster>
                  <CommingIMG src={Comming} />
                </EventPoster>
              </EventPosterContainer>
              <EventInfoContainer>
                <EventInfo>
                  장소: 몰?루? <br />
                  일시: 2024. 03. 24. 14:00 ~ 18:00 <br />
                  인원: ~ 40명
                  <br />
                  참가비: 15,000원
                </EventInfo>
              </EventInfoContainer>
            </Link>
          </EventList>
          <EventList className="list">
            <Link to={"/event_apply"}>
              <EventTitle>Zero Sky</EventTitle>
              <EventPosterContainer>
                <EventPoster>
                  <CommingIMG src={Comming} />
                </EventPoster>
              </EventPosterContainer>
              <EventInfoContainer>
                <EventInfo>
                  장소: 미정 <br />
                  일시: 2024. 05. 26. 18:00 ~ 20:00 <br />
                  인원: ~ 80명 <br />
                  참가비: 28,000원
                </EventInfo>
              </EventInfoContainer>
            </Link>
          </EventList>
          {/*Events.map((EventAPI, index) => (
          <EventList className="list" className="EventAPI__name" key={index}>
            <EventPoster>
            <CommingIMG src={Comming}/>{poster}</EventPoster>
            {title}
            {info}
          </EventList>
        ))*/}
        </Events>
      </EventsContainer>
    </>
  );
}
{
  /*
EventAPI.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.img.isRequired,
    info: PropTypes.string.isRequired,
  };
*/
}
export default Event;
