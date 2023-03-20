import styled, { createGlobalStyle } from 'styled-components'

export const snakeSize = 32

const COLORS = {
  yellow: '#FDF800',
  cyan: '#00E4F2',
  pink: '#F000F2',
  black: '#000000',
  white: '#FFFFFF'
}

export const Svg = styled.svg`
  filter: drop-shadow(0 0 4px ${COLORS.white});
`

export const Arrow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    background: #ffffff15;
    cursor: pointer;
  }

  :hover > svg > path{
    stroke: ${COLORS.yellow};
  }
`

interface snakeCords {
  snakeX: number
  snakeY: number
}

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: absolute;
  z-index: 20;
  
  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 18px;
    text-shadow: 0 0 4px white;
    color: #fff;
  };
`

export const ButtonGame = styled.button`
    background: none;
    border: solid 2px white;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    text-shadow: 0 0 4px white;
    color: #fff;
    border-radius: 5px;
    padding: 6px 12px;
    box-shadow: 0 0 4px white, inset 0 0 4px white;
  
  :hover{
    cursor: pointer;
    background: #ffffff15;
  }
`

export const SnakeHead = styled.div<snakeCords>`
  width: ${snakeSize}px;
  height: ${snakeSize}px;
  position: absolute;
  top: ${props => props.snakeY}px;
  left: ${props => props.snakeX}px;
  background: ${COLORS.pink};
  filter: drop-shadow(0 0 4px ${COLORS.pink});
`

export const ArrowBoard = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`

export const Canvas = styled.div`
  width: calc(${snakeSize}*12px);
  height: calc(${snakeSize}*12px);
  position: relative;
  background-image: url(/pattern.svg);
  box-shadow: inset 0 0 5px ${COLORS.white};
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  h1 {
    font-family: 'Lobster', cursive;
    font-size: 30px;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: translateY(-18px);

  h1 {
    color: white;
    transform: translateY(-15px);
    text-shadow: 0 0 10px white;
  }
`

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  background: #000;
`

export const Section = styled.section`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 5px ${COLORS.cyan};
  box-shadow: 0px 0px 20px ${COLORS.cyan};
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
