import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles/styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useContext, useEffect } from 'react'
import SnakeContext, { SnakeContextType } from './context/SnakeContext'
import moveSnake from './components/moveSnake'
import { KeyTypes } from './types/types'
import AddBody from './components/addBody'

function App (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body } = Snake
  const { snakeX, snakeY } = body[0]

  const pressArrow = (key: KeyTypes): void => {
    const { newBody, newSnakeHead } = moveSnake(key, body)
    const newSnakeX = newSnakeHead.snakeX
    const newSnakeY = newSnakeHead.snakeY
    if (newSnakeX === 320 && newSnakeY === 320) {
      const addBody = AddBody(newBody)
      return dispatch({ type: 'MOVE', payload: addBody })
    }
    dispatch({ type: 'MOVE', payload: newBody })
  }

  const keyPressEvent = (event: KeyboardEvent): void => {
    const eventKey = event.key
    const keys: KeyTypes[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    const key = keys.find(e => e === eventKey)
    if (key !== undefined) pressArrow(key)
  }

  useEffect(() => {
    window.addEventListener('keydown', keyPressEvent)
    console.log('render')

    return () => {
      window.removeEventListener('keydown', keyPressEvent)
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
