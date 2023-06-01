import { createGlobalStyle } from 'styled-components'
import img from './assets/programming-bg.webp'

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
  h1 {
    color: #444444;
  }
  button {
    min-width: 100px;
    padding: 10px;
    background: #2986cc;
    color: #fff;
    border-radius: 5px;
    outline: none;
    border: none; 
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: 200ms;
    :hover {
      background: #337fb8;
      cursor: pointer;
    }
  }
`

export { GlobalStyle }