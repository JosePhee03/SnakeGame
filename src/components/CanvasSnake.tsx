import { useEffect, useRef } from 'react'
import moveSnake from './moveSnake'
import { KeyTypes, StatusGame } from '../types/types'
import useSnake from '../hooks/useSnake'
import ModalGame from './ModalGame'
import { Canvas } from '../styles/styles'
import { CANVAS_SIZE, COLORS, SNAKE_SIZE } from '../constants/snakePreset'

function CanvasSnake (): JSX.Element {
  const { Snake, snakeEventDispatch, startGameDispatch, resetGameDispatch } = useSnake()
  const { body, status, direction, food } = Snake
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleButton = (): void => status === StatusGame.PAUSE ? startGameDispatch() : resetGameDispatch()
  useEffect(() => {
    let moveInterval: NodeJS.Timer
    if (status === StatusGame.START) {
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
      context.fillRect(x, y, SNAKE_SIZE, SNAKE_SIZE)
    }

    drawSquare(food.foodX, food.foodY, COLORS.yellow)
    body.map(({ snakeX, snakeY }) => drawSquare(snakeX, snakeY, COLORS.pink))

    return (): void => {
      clearInterval(moveInterval)
      context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    }
  }, [body])

  return (
    <>
      {status !== StatusGame.START && <ModalGame status={status} handleButton={handleButton} />}
      <Canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
    </>
  )
}

export default CanvasSnake
