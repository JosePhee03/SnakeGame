import { BodyType, FoodType, KeyTypes, SnakeCoords } from '../types/types'
import { snakeHead } from './snakeHead'
import { CollisionFoodWithSnakeHead, CollisionSnakeHeadWithBorder, CollisionSnakeWithHead } from './Collisions'

interface MoveAction {
  newBody: SnakeCoords[]
  typeAction: TypeAction
}

export type TypeAction =
  | 'MOVE'
  | 'GAME_OVER'
  | 'ADD'

function moveSnake (key: KeyTypes, body: BodyType, food: FoodType): MoveAction {
  const newSnakeHead = snakeHead(body, key)
  const newBody = body.map((_, index, arr) =>
    index === 0
      ? newSnakeHead
      : arr[index - 1]
  )

  let typeAction: TypeAction = 'MOVE'

  if (CollisionSnakeHeadWithBorder(newBody) || CollisionSnakeWithHead(newBody)) {
    typeAction = 'GAME_OVER'
  } else if (CollisionFoodWithSnakeHead(newBody, food)) {
    newBody.push({ snakeX: -32, snakeY: -32 })
    typeAction = 'ADD'
  }

  return { newBody, typeAction }
}

export default moveSnake
