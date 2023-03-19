import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles/styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import useHandleMove from './hooks/usehandleMove'
import ModalGame from './components/ModalGame'

function App (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body } = Snake
  const { snakeX, snakeY } = body[0]
  const { pressArrow } = useHandleMove(body, dispatch)

  if (snakeX < 0 || snakeX > 352 || snakeY < 0 || snakeY > 352) {
    console.log('Game Over')
    dispatch({ type: 'RESET', payload: null })
  }

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <ModalGame />
          <Header>
            <h1>Snake</h1>
          </Header>
          <CanvasSnake />
          <ArrowBoard>
            <Arrow onClick={() => pressArrow('ArrowUp')}><ArrowIcon direction='ArrowUp' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowDown')}><ArrowIcon direction='ArrowDown' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowLeft')}><ArrowIcon direction='ArrowLeft' /></Arrow>
            <Arrow onClick={() => pressArrow('ArrowRight')}><ArrowIcon direction='ArrowRight' /></Arrow>
          </ArrowBoard>
        </Section>
      </Main>
    </>
  )
}

export default App
