import { Arrow, ArrowBoard, GlobalStyle, Main, Section } from './styles/styles'
import CanvasSnake from './components/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import useHandleMove from './hooks/usehandleMove'
import styled from 'styled-components'
import HeaderMenu from './components/HeaderMenu'
import ModalGame from './components/ModalGame'

function App (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { direction, status } = Snake
  const { pressArrow } = useHandleMove(direction, dispatch)

  const handleButton = (): void => {
    status === 'PAUSE'
      ? dispatch({ type: 'START' })
      : dispatch({ type: 'RESET' })
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <HeaderMenu />
          <CanvasSnake />
          {status !== 'START' && <ModalGame status={status} handleButton={handleButton} />}
          <ArrowBoard>
            <Arrow onClick={() => pressArrow('ArrowUp')}><ArrowIcon direction='ArrowUp' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowDown')}><ArrowIcon direction='ArrowDown' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowLeft')}><ArrowIcon direction='ArrowLeft' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowRight')}><ArrowIcon direction='ArrowRight' /></Arrow>
          </ArrowBoard>
        </Section>
        <Footer>
          <h5>Status: {Snake.status}</h5>
          <h5>Body: {Snake.body.length}</h5>
          <h5>Direction: {Snake.direction}</h5>
          <h5>SnakeX: {Snake.body[0].snakeX} <span>SnakeY: {Snake.body[0].snakeY}</span></h5>
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
