import { BodyType, FoodType, KeyTypes, SnakeCoords, SnakeEvents } from '../types/types'
import { snakeHead } from './snakeHead'
import { CollisionFoodWithSnakeHead, CollisionSnakeHeadWithBorder, CollisionSnakeWithHead } from './Collisions'

interface MoveAction {
  newBody: SnakeCoords[]
  snakeEvents: SnakeEvents
}

function moveSnake (key: KeyTypes, body: BodyType, food: FoodType): MoveAction {
  const newSnakeHead = snakeHead(body, key)
  const newBody = body.map((_, index, arr) =>
    index === 0
      ? newSnakeHead
      : arr[index - 1]
  )

  let snakeEvents = SnakeEvents.MOVE

  if (CollisionSnakeHeadWithBorder(newBody) || CollisionSnakeWithHead(newBody)) {
    snakeEvents = SnakeEvents.DIE
  } else if (CollisionFoodWithSnakeHead(newBody, food)) {
    newBody.push({ snakeX: -32, snakeY: -32 })
    snakeEvents = SnakeEvents.ADD
  }

  return { newBody, snakeEvents }
}

export default moveSnake
