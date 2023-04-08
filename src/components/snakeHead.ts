import { snakeSize } from '../styles/styles'
import { BodyType, KeyTypes, SnakeCoords } from '../types/types'

export function snakeHead (body: BodyType, key: KeyTypes): SnakeCoords {
  const snakeHead = body[0]
  const { snakeX, snakeY } = snakeHead

  switch (key) {
    case KeyTypes.ArrowDown:
      return ({ snakeX, snakeY: snakeY + snakeSize })
    case KeyTypes.ArrowUp:
      return ({ snakeX, snakeY: snakeY - snakeSize })
    case KeyTypes.ArrowLeft:
      return ({ snakeY, snakeX: snakeX - snakeSize })
    case KeyTypes.ArrowRight:
      return ({ snakeY, snakeX: snakeX + snakeSize })
  }
}
