import { snakeSize } from '../styles/styles'
import { BodyType, KeyTypes, SnakeCoords } from '../types/types'

export function snakeHead (body: BodyType, key: KeyTypes): SnakeCoords {
  const snakeHead = body[0]
  const { snakeX, snakeY } = snakeHead

  switch (key) {
    case 'ArrowDown':
      return ({ snakeX, snakeY: snakeY + snakeSize })
    case 'ArrowUp':
      return ({ snakeX, snakeY: snakeY - snakeSize })
    case 'ArrowLeft':
      return ({ snakeY, snakeX: snakeX - snakeSize })
    case 'ArrowRight':
      return ({ snakeY, snakeX: snakeX + snakeSize })
  }
}
