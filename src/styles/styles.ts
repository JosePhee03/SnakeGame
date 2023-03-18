import styled, { createGlobalStyle } from 'styled-components'

const snakeSize = 32

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

interface snakeCords {
  snakeX: number
  snakeY: number
}

export const SnakeHead = styled.div<snakeCords>`
  width: ${snakeSize}px;
  height: ${snakeSize}px;
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
  width: calc(${snakeSize}*16px);
  height: calc(${snakeSize}*16px);
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
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='60' height='60' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 0%, 1)'/><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' transform='translate(10,0)' stroke-width='1' stroke='none' fill='hsla(0, 0%, 100%, 0.1450980392156863)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>")
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
