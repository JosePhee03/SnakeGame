import { BodyType, KeyTypes, SnakeCoords } from '../types/types'

export function snakeHead (body: BodyType, key: KeyTypes): SnakeCoords {
  const snakeHead = body[0]
  const { snakeX, snakeY } = snakeHead

  switch (key) {
    case 'ArrowDown':
      return ({ snakeX, snakeY: snakeY + 30 })
    case 'ArrowUp':
      return ({ snakeX, snakeY: snakeY - 30 })
    case 'ArrowLeft':
      return ({ snakeY, snakeX: snakeX - 30 })
    case 'ArrowRight':
      return ({ snakeY, snakeX: snakeX + 30 })
  }
}
