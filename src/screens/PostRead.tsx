import styled from "styled-components";
import PropTypes from "prop-types";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(100vh - 8rem);
  padding-top: 0.5rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 2.5rem;
`;

const PostTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  height: 4rem;
  font-weight: 600;
  font-size: 2rem;
`;

const PostContent = styled.p`
  font-weight: 300;
  font-size: 1rem;
  width: 90%;
  height: 80%;
  border: 1px solid var(--border);
  overflow-y: scroll;
  padding: 1rem;
`;

function PostRead(
  {
    /* title, date */
  }
) {
  return (
    <div id="GlobalContainer">
      <PostContainer>
        <TitleContainer>
          <PostTitle>공지 제목</PostTitle>
        </TitleContainer>
        <PostContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi
          delectus! Eaque amet pariatur fugit illo fugiat voluptate
          exercitationem numquam totam laboriosam a magnam ex officiis
          accusantium explicabo, sit cupiditate?
        </PostContent>
        {/*PostAPI.map((PostAPI, index) => (
          <PostCololumn className="PostAPI__name" key={index}>
            {index}
            {title}
            {date}
          </PostCololumn>
        ))*/}
      </PostContainer>
    </div>
  );
}
{
  /*
NoticeAPI.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
*/
}
export default PostRead;
