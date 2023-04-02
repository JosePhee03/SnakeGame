import { BodyType, KeyTypes, SnakeCoords } from '../types/types'
import { snakeHead } from './snakeHead'

interface NewBody {
  newBody: SnakeCoords[]
}

function moveSnake (key: KeyTypes, body: BodyType): NewBody {
  const newSnakeHead = snakeHead(body, key)
  const newBody = body.map((_, index, arr) =>
    index === 0
      ? newSnakeHead
      : arr[index - 1]
  )

  return { newBody }
}

export default moveSnake
