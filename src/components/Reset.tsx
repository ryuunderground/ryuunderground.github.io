import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
:root {
    --cream: #fdfbe8;
    --sky: #AAC4E7;
    --orange:#EB631B;
    --light-brown: #C97338;
    --dark-brown: #65371F;
    --red-brown:#A54D27;
    --border: rgba(0,0,0,0.5);
    --mobile-screen: calc(100vh - var(--header-height) - var(--footer-height));
    --header-height: 22rem;
    --footer-height: 12rem;

}

.container {
  width: 100vw;
  height: var(--mobile-screen);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  background-color: var(--border);
  box-sizing: border-box;
  margin-top: var(--header-height);
}
.gnb {
    display: flex;
  align-items: center;
  font-size: 5rem;
  font-weight: 600;
  width: 100vw;
  height: 10rem;
  position: fixed;
  box-sizing: border-box;
  top: 12rem;
  left: 0;
  background-color: #EEEEEE;
  z-index: 50;
}
.unordered_lists {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: white;
    box-sizing: border-box;
}
.list{
    display: flex;
  flex-direction: column;
  width: 100%;
  height: var(--mobile-screen);
  align-items: center;
  border: 2px solid var(--border);
  list-style: none;
  box-sizing: border-box;
  background-color: white;
}
.form {
  display: flex;
  width: 100%;
  height: var(--mobile-screen);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  padding: 2rem 5vw;
  position: relative;
  font-size: 3rem;
}
.label{
    display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 15rem;
  gap: 2rem;
}
.input {
  width: 90vw;
  height: 7rem;
  border-radius: 5rem;
  font-size: 2.5rem;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5rem;
}
.phone_number {
  width: 30vw;
}

.submit_btn{
    position: absolute;
  width: 35%;
  right: 0;
  font-size: 2.5rem;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  &:hover {
    transform: scale(1.2);
  }
}


    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, #root {
        height: 100%;
        width: 100vw;
    }
    html,
    body,
    body > div { /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    #root {
        display: flex;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 0;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;

export default GlobalStyles;
