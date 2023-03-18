import { BodyType, KeyTypes, SnakeCoords } from '../types/types'
import { snakeHead } from './snakeHead'

interface NewSnake {
  newBody: SnakeCoords[]
  newSnakeHead: SnakeCoords
}

function moveSnake (key: KeyTypes, body: BodyType): NewSnake {
  const newSnakeHead = snakeHead(body, key)
  const newBody = body.map((_, index, arr) =>
    index === 0
      ? newSnakeHead
      : arr[index - 1]
  )

  return { newBody, newSnakeHead }
}

export default moveSnake
