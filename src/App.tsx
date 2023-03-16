import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles/styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext, useEffect } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import { MoveSnake } from './components/MoveSnake'
import { KeyTypes } from './types/types'
import AddBody from './components/AddBody'

function App (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body } = Snake
  const { snakeX, snakeY } = body[0]

  const moveDown = (key: KeyTypes): void => {
    const newSnakeHead = MoveSnake(body, key)
    const newbody = body.map((e, i) => i === 0 ? newSnakeHead : e)
    dispatch({ type: 'MOVE', payload: newbody })
  }

  useEffect(() => {
    if (snakeX === 300 && snakeY === 300) {
      const newBody = AddBody(body)
      dispatch({ type: 'MOVE', payload: newBody })
    }
  }, [snakeX, snakeY])

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <Header>
            <h1>Snake</h1>
          </Header>
          <CanvasSnake />
          <ArrowBoard>
            <Arrow onClick={() => moveDown('ArrowUp')}><ArrowIcon direction='ArrowUp' /></Arrow>
            <Arrow onClick={() => moveDown('ArrowDown')}><ArrowIcon direction='ArrowDown' /></Arrow>
            <Arrow onClick={() => moveDown('ArrowLeft')}><ArrowIcon direction='ArrowLeft' /></Arrow>
            <Arrow onClick={() => moveDown('ArrowRight')}><ArrowIcon direction='ArrowRight' /></Arrow>
          </ArrowBoard>
        </Section>
      </Main>
    </>
  )
}

export default App
