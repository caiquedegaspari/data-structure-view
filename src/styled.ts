import styled, { createGlobalStyle } from 'styled-components';
import img from './assets/programming-bg.webp';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    ::before {
        content: " ";
        background-image: url(${img});
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.1;
        z-index: -1;
      }
  }
  h1, h2, h3, h4, h5, h6 {
    color: #254757
;
  }
  button {
    min-width: 150px;
    height: 45px;
    padding: 10px;
    background: #2986cc;
    color: #fff;
    border-radius: 5px;
    outline: none;
    border: none; 
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: 200ms;
    font-weight: 600;
    :hover {
      background: #337fb8;
      cursor: pointer;
    }
  }
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export { GlobalStyle, ButtonContainer };
