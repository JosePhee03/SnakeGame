import styled, { createGlobalStyle } from "styled-components"

export const Arrow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    background: white;
    cursor: pointer;
  }
`

type snakeCords = {
  snakeX: number;
  snakeY: number;
};

export const SnakeHead = styled.div<snakeCords>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: ${props => props.snakeY}px;
  left: ${props => props.snakeX}px;
  background: red;
`

export const ArrowBoard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: #bbb;
`

export const Canvas = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  background: #ddd;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

`

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  background: #000;
`

export const Section = styled.section`
  background: #303030;
  border-radius: 10px;
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #aaa;
    font-weight: bolder;
  }
`
