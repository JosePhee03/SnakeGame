import { Canvas, SnakeHead } from '../../styles/styles'
import { useContext, useEffect } from 'react'
import SnakeContext, { SnakeContextType } from '../../context/SnakeContext'
import ModalGame from '../ModalGame'
import moveSnake from '../moveSnake'
import useAddBody from '../../hooks/useAddBody'
import { KeyTypes } from '../../types/types'

function CanvasSnake (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status, direction } = Snake
  const { snakeX, snakeY } = body[0]

  useAddBody(body, dispatch)

  let moveInterval: NodeJS.Timer
  useEffect(() => {
    if (status === 'START') {
      moveInterval = setInterval(() => {
        const { newBody } = moveSnake(direction as KeyTypes, body)
        dispatch({ type: 'MOVE', payload: newBody })
        console.log(direction)
      }, 200)
    }
    return () => clearInterval(moveInterval)
  }, [body])

  const handleButton = (): void => {
    status === 'PAUSE'
      ? dispatch({ type: 'START' })
      : dispatch({ type: 'RESET' })
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
            />))
          : <ModalGame handleButton={handleButton} status={status} />}
        {status !== 'START' && <ModalGame status={status} handleButton={handleButton} />}
      </Canvas>
    </>
  )
}

export default CanvasSnake
