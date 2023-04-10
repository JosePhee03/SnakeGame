import { useEffect, useRef } from 'react'
import moveSnake from './moveSnake'
import { KeyTypes, StatusGame } from '../types/types'
import useSnake from '../hooks/useSnake'
import ModalGame from './ModalGame'
import { Canvas } from '../styles/styles'

function CanvasSnake (): JSX.Element {
  const { Snake, snakeEventDispatch, startGameDispatch, resetGameDispatch } = useSnake()
  const { body, status, direction, food } = Snake
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleButton = (): void => status === StatusGame.PAUSE ? startGameDispatch() : resetGameDispatch()
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
      {status !== 'START' && <ModalGame status={status} handleButton={handleButton} />}
      <Canvas ref={canvasRef} width={384} height={384} />
    </>
  )
}

export default CanvasSnake
