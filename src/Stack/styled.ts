import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 20;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  position: relative;
  height: 150px;
  h1 {
    color: red;
  }
`

const Stack = styled.div`
  margin: 1px;
  text-align:center;
  //border: 1.5px solid #30a9ff;
  background: #7dcb52;
  color: #fff;
  border-radius: 5px;
  position: static;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const StackContainer = styled.div`
  display:flex;
  flex-direction:column;
  width: 150px;
`

export { ButtonContainer, Stack, Container, StackContainer }