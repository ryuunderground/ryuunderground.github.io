import styled from "styled-components";

const Posts = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2rem repeat(auto-fit, 1.5rem);
  background-color: white;
`;

const PostHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 2fr;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid var(--border);
  box-sizing: border-box;
`;

const PostCollumn = styled(PostHeader)`
  font-size: 1rem;
  font-weight: 300;
`;

const PostText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
interface PostCollumnProps {
  index: number;
  title: string;
  date: string;
}
{
  /*
function PostCollumn({ index, title, date }: PostCollumnProps) {
  return (
    <div>
      <PostText>{index}</PostText>
      <PostText>{title}</PostText>
      <PostText>{date}</PostText>
    </div>
  );
}
*/
}
function Post() {
  return (
    <div id="GlobalContainer">
      <Posts>
        <PostHeader>
          <PostText>순번</PostText>
          <PostText>제목</PostText>
          <PostText>날짜</PostText>
        </PostHeader>
        <PostCollumn>
          <PostText>1</PostText>
          <PostText>게시글 제목</PostText>
          <PostText>2024.03.04</PostText>
        </PostCollumn>
        <PostCollumn>
          <PostText>2</PostText>
          <PostText>게시글 제목</PostText>
          <PostText>2024.03.04</PostText>
        </PostCollumn>
        <PostCollumn>
          <PostText>3</PostText>
          <PostText>게시글 제목</PostText>
          <PostText>2024.03.04</PostText>
        </PostCollumn>
        {/*genres.map((PostAPI, index) => (
          <PostCololumn className="PostAPI__name" key={index}>
            <span>{index}</span>
            <span>{title}</span>
            <span>{date}</span>
          </PostCololumn>
        ))*/}
      </Posts>
    </div>
  );
}

export default Post;
