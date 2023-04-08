import { useContext, useEffect, useRef } from 'react'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import moveSnake from './moveSnake'
import { KeyTypes } from '../types/types'
import styled from 'styled-components'
import { snakeEventDispatch } from '../context/SnakeProvider'

function CanvasSnake (): JSX.Element {
  const { Snake } = useContext(SnakeContext) as SnakeContextType
  const { body, status, direction, food } = Snake
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let moveInterval: NodeJS.Timer
    if (status === 'START') {
      moveInterval = setInterval(() => {
        const { newBody, snakeEvents } = moveSnake(direction as KeyTypes, body, food)
        snakeEventDispatch(snakeEvents, newBody)
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
