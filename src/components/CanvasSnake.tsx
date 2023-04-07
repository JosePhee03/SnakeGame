import { useContext, useEffect, useRef } from 'react'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import moveSnake from './moveSnake'
import useAddBody from '../hooks/useAddBody'
import { KeyTypes } from '../types/types'
import styled from 'styled-components'
import { CollisionFoodWithSnake, CollisionFoodWithSnakeHead, CollisionSnakeHeadWithBorder, CollisionSnakeWithHead } from './Collisions'

function CanvasSnake (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status, direction } = Snake
  const { food, GenerateNewFood } = useAddBody()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let moveInterval: NodeJS.Timer
    if (status === 'START') {
      moveInterval = setInterval(() => {
        const { newBody } = moveSnake(direction as KeyTypes, body)
        dispatch({ type: 'MOVE', payload: newBody })
        if (CollisionSnakeHeadWithBorder(newBody) || CollisionSnakeWithHead(newBody)) {
          dispatch({ type: 'GAME_OVER' })
        } else if (CollisionFoodWithSnakeHead(newBody, food)) {
          const newSnake = [...newBody]
          newSnake.push({ snakeX: -32, snakeY: -32 })
          dispatch({ type: 'ADD', payload: newSnake })
          GenerateNewFood()
        }
        if (CollisionFoodWithSnake(newBody, food)) return GenerateNewFood()
      }, 200)
    }

    const canvas = canvasRef.current as HTMLCanvasElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D

    const drawSquare = (x: number, y: number, color: string): void => {
      context.fillStyle = color
      context.filter = `drop-shadow(0 0 4px ${color})`
      context.fillRect(x, y, 32, 32)
    }

    drawSquare(food.foodX, food.foodY, 'yellow')
    body.map(({ snakeX, snakeY }) => drawSquare(snakeX, snakeY, 'red'))
    console.log('canvas')

    return (): void => {
      clearInterval(moveInterval)
      context.clearRect(0, 0, 384, 384)
    }
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
