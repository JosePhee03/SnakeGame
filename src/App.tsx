import { Arrow, ArrowBoard, GlobalStyle, Main, Section } from './styles/styles'
import CanvasSnake from './components/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import useHandleMove from './hooks/usehandleMove'
import styled from 'styled-components'
import HeaderMenu from './components/HeaderMenu'
import ModalGame from './components/ModalGame'
import { pauseGameDispatch, resetGameDispatch, startGameDispatch } from './context/SnakeProvider'
import { KeyTypes, StatusGame } from './types/types'

function App (): JSX.Element {
  const { Snake } = useContext(SnakeContext) as SnakeContextType
  const { direction, status } = Snake
  const { pressArrow } = useHandleMove(direction)

  const handlePause = (): void => pauseGameDispatch(Snake)

  const handleButton = (): void => status === StatusGame.PAUSE ? startGameDispatch() : resetGameDispatch()

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <HeaderMenu Snake={Snake} handlePause={handlePause} />
          <CanvasSnake />
          {status !== 'START' && <ModalGame status={status} handleButton={handleButton} />}
          <ArrowBoard>
            <Arrow onClick={() => pressArrow(KeyTypes.ArrowUp)}><ArrowIcon direction={KeyTypes.ArrowUp} /></Arrow>
            <Arrow onClick={() => pressArrow(KeyTypes.ArrowDown)}><ArrowIcon direction={KeyTypes.ArrowDown} /></Arrow>
            <Arrow onClick={() => pressArrow(KeyTypes.ArrowLeft)}><ArrowIcon direction={KeyTypes.ArrowLeft} /></Arrow>
            <Arrow onClick={() => pressArrow(KeyTypes.ArrowRight)}><ArrowIcon direction={KeyTypes.ArrowRight} /></Arrow>
          </ArrowBoard>
        </Section>
        <Footer>
          <h5>Status: {Snake.status}</h5>
          <h5>Body: {Snake.body.length}</h5>
          <h5>Direction: {Snake.direction}</h5>
          <h5>SnakeX: {Snake.body[0].snakeX} <span>SnakeY: {Snake.body[0].snakeY}</span></h5>
          <h5>food: {Snake.food.foodX}, {Snake.food.foodY}</h5>
        </Footer>
      </Main>
    </>
  )
}

export default App

const Footer = styled.footer`
  position: absolute;
  top: 0;
  right: 30px;
  background: #ccc;
`
