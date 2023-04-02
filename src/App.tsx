import { Arrow, ArrowBoard, GlobalStyle, Main, Section } from './styles/styles'
import CanvasSnake from './components/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import useHandleMove from './hooks/usehandleMove'
import styled from 'styled-components'
import HeaderMenu from './components/HeaderMenu'

function App (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { direction } = Snake
  const { pressArrow } = useHandleMove(direction, dispatch)

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <HeaderMenu />
          <CanvasSnake />
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
