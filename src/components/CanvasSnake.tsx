import { useContext, useEffect, useRef } from 'react'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import moveSnake from './moveSnake'
import useAddBody from '../hooks/useAddBody'
import { KeyTypes } from '../types/types'
import styled from 'styled-components'

function CanvasSnake (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status, direction } = Snake
  const { snakeX, snakeY } = body[0]
  const { food, GenerateNewFood } = useAddBody()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  let moveInterval: NodeJS.Timer
  useEffect(() => {
    if (status === 'START') {
      moveInterval = setInterval(() => {
        const { newBody } = moveSnake(direction as KeyTypes, body)
        dispatch({ type: 'MOVE', payload: newBody })
        if (snakeX < 0 || snakeX > 352 || snakeY < 0 || snakeY > 352) {
          dispatch({ type: 'GAME_OVER' })
        } else if (food.foodX === newBody[0].snakeX && food.foodY === newBody[0].snakeY) {
          const newSnake = [...body]
          newSnake.push({ snakeX: -32, snakeY: -32 })
          dispatch({ type: 'ADD', payload: newSnake })
          GenerateNewFood()
        }
      }, 200)
    }
    return () => clearInterval(moveInterval)
  }, [body])

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    const drawSquare = (x: number, y: number, color: string): void => {
      context.fillStyle = color
      context.fillRect(x, y, 32, 32)
    }

    drawSquare(food.foodX, food.foodY, 'pink')
    body.map(({ snakeX, snakeY }) => drawSquare(snakeX, snakeY, 'red'))
    console.log('canvas')

    return () => context.clearRect(0, 0, 384, 384)
  }, [body])

  return (
    <>
      <Canvas ref={canvasRef} width={384} height={384} />
    </>
  )
}

export default CanvasSnake

export const Canvas = styled.canvas`
  background-image: url(/pattern.svg);
  box-shadow: inset 0 0 10px #ffffff40;
`
