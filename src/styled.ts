import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #153243;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #eff0d1;
  }
  button {
    min-width: 150px;
    height: 45px;
    padding: 10px;
    background: #284b63;
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

const Container = styled.div`
	display: flex;
	justify-content: space-around;
`;

const ButtonGroupContainer = styled.div`
	display: grid;
	grid-template-columns: 200px 200px;
	gap: 20;
	grid-row-gap: 10px;
	grid-column-gap: 10px;
	position: relative;
	height: 150px;
`;

const DefaultItem = styled.div`
	margin: 3px;
	text-align: center;
	background: #2a9d8f;
	color: #fff;
	border-radius: 5px;
	position: static;
	height: 50px;
	min-width: 75px;
`;

export {
	GlobalStyle,
	ButtonContainer,
	Container,
	ButtonGroupContainer,
	DefaultItem,
};
