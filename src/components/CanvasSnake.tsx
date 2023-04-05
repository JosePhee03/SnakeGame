import { Canvas, SnakeHead } from '../styles/styles'
import { memo, useContext, useEffect } from 'react'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import moveSnake from './moveSnake'
import useAddBody, { FoodType } from '../hooks/useAddBody'
import { KeyTypes } from '../types/types'
import styled from 'styled-components'

function CanvasSnake (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status, direction } = Snake
  const { snakeX, snakeY } = body[0]
  const { food, GenerateNewFood } = useAddBody()

  let moveInterval: NodeJS.Timer
  useEffect(() => {
    if (status === 'START') {
      moveInterval = setInterval(() => {
        const { newBody } = moveSnake(direction as KeyTypes, body)
        dispatch({ type: 'MOVE', payload: newBody })
        if (food.foodX === newBody[0].snakeX && food.foodY === newBody[0].snakeY) {
          const newSnake = [...body]
          newSnake.push({ snakeX: -32, snakeY: -32 })
          dispatch({ type: 'ADD', payload: newSnake })
          GenerateNewFood()
        }
      }, 200)
    }
    return () => clearInterval(moveInterval)
  }, [body])

  if (snakeX < 0 || snakeX > 352 || snakeY < 0 || snakeY > 352) {
    dispatch({ type: 'GAME_OVER' })
  }

  return (
    <>
      <Canvas>
        {status === 'START' &&
          <>
            <Food foodX={food.foodX} foodY={food.foodY} />
            {body.map((coord, index) => (
              <SnakeHead
                key={index}
                snakeX={coord.snakeX}
                snakeY={coord.snakeY}
              />))}
          </>}
      </Canvas>
    </>
  )
}

export default memo(CanvasSnake)

const Food = styled.div<FoodType>`
  width: ${32}px;
  height: ${32}px;
  position: absolute;
  top: ${props => props.foodY}px;
  left: ${props => props.foodX}px;
  background: yellow;
  filter: drop-shadow(0 0 4px yellow);
`
