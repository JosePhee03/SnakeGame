import styled, { createGlobalStyle } from 'styled-components'
import { COLORS, OPACITY } from '../constants/snakePreset'

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
    background: ${OPACITY[15]};
    cursor: pointer;
  }

  :hover > svg > path{
    stroke: ${COLORS.yellow};
  }
`

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
    color: white;
  };
`

export const ButtonGame = styled.button`
    background: none;
    border: solid 2px white;
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    text-shadow: 0 0 4px white;
    color: white;
    border-radius: 5px;
    padding: 6px 12px;
    box-shadow: 0 0 4px white, inset 0 0 4px white;
  
  :hover{
    cursor: pointer;
    background: ${OPACITY[15]};
  }
`

export const Board = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  div:nth-child(n){
    width: calc(100% / 3);
  }

  h4 {
    color: white;
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
    font-family: 'Lobster', cursive;
    font-size: 30px;
    transform: translateY(-15px);
    text-shadow: 0 0 10px white;
  }
`

export const Canvas = styled.canvas`
  background-image: url(/pattern.svg);
  box-shadow: inset 0 0 10px ${OPACITY[40]};
`

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  background: black;
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
    box-sizing: border-box;
  }
`
export const Score = styled.div`
  display: flex;
  padding-left: 20px;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 0 0 4px white;
    font-family: 'Press Start 2P', cursive;
    color: white;
  }
  
  h6 {
    font-size: 12px;
  }
  
  h5 {
    font-size: 16px;
  }
`

export const HeaderButton = styled.div`
  display: flex;
  justify-content: end;

  button {
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background: ${OPACITY[40]};
    }
  }
`
