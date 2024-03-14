import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

const WritingForm = styled.form`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;
const TitleInput = styled.input`
  width: 90%;
  height: 2rem;
  font-size: 1.7rem;
  border: 1px solid var(--border);
  box-sizing: border-box;
`;
const ContentArea = styled.textarea`
  width: 90%;
  height: 75%;
  border: 1px solid var(--border);
  overflow-y: scroll;
  resize: none;
`;
const UploadBtn = styled.button`
  width: 5rem;
  height: 2rem;
  position: absolute;
  right: 10%;
  bottom: 0;
`;

function PostWrite() {
  const [title, setTitle] = useState("");
  const titleChange = (event: React.FormEvent<HTMLInputElement>) => {
    {
      const {
        currentTarget: { value },
      } = event;
      setTitle(value);
    }
  };
  const [value, setValue] = useState("");
  const valueChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ title });
    console.log({ value });
  };

  return (
    <div id="GlobalContainer">
      <WritingForm onSubmit={onSubmit}>
        <TitleInput
          value={title}
          onChange={titleChange}
          type="text"
          placeholder="공지 사항 제목 입력"
        />
        <hr />
        <ContentArea onChange={valueChange} />
        <hr />
        <UploadBtn>공지 하기</UploadBtn>
      </WritingForm>
    </div>
  );
}

export default PostWrite;
