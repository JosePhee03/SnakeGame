import { SNAKE_SIZE } from '../constants/snakePreset'
import { BodyType, KeyTypes, SnakeCoords } from '../types/types'

export function snakeHead (body: BodyType, key: KeyTypes): SnakeCoords {
  const snakeHead = body[0]
  const { snakeX, snakeY } = snakeHead

  switch (key) {
    case KeyTypes.ArrowDown:
      return ({ snakeX, snakeY: snakeY + SNAKE_SIZE })
    case KeyTypes.ArrowUp:
      return ({ snakeX, snakeY: snakeY - SNAKE_SIZE })
    case KeyTypes.ArrowLeft:
      return ({ snakeY, snakeX: snakeX - SNAKE_SIZE })
    case KeyTypes.ArrowRight:
      return ({ snakeY, snakeX: snakeX + SNAKE_SIZE })
  }
}
