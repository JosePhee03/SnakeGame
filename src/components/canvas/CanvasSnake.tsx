import { Canvas, SnakeHead } from '../../styles/styles'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from '../../context/SnakeContext'
import ModalGame from '../ModalGame'

function CanvasSnake (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status } = Snake
  const { snakeX, snakeY } = body[0]

  const handleStart = (): void => {
    dispatch({ type: 'START' })
  }

  if (snakeX < 0 || snakeX > 352 || snakeY < 0 || snakeY > 352) {
    dispatch({ type: 'GAME_OVER' })
  }

  return (
    <>
      <Canvas>
        {status === 'START'
          ? body.map((coord, index) => (
            <SnakeHead
              key={index}
              snakeX={coord.snakeX}
              snakeY={coord.snakeY}
            />
          ))
          : <ModalGame status={status} handleStart={handleStart} />}
      </Canvas>
    </>
  )
}

export default CanvasSnake
