import { BodyType, FoodType } from '../types/types'

function CollisionSnakeWithHead (body: BodyType): boolean {
  const [snakeHead, ...snakeBody] = body
  return snakeBody.some(({ snakeX, snakeY }) => snakeX === snakeHead.snakeX && snakeY === snakeHead.snakeY)
}

function CollisionFoodWithSnake (body: BodyType, food: FoodType): boolean {
  return body.some(({ snakeX, snakeY }) => food.foodX === snakeX && food.foodY === snakeY)
}

function CollisionFoodWithSnakeHead (body: BodyType, food: FoodType): boolean {
  const snakeHead = body[0]
  return food.foodX === snakeHead.snakeX && food.foodY === snakeHead.snakeY
}

function CollisionSnakeHeadWithBorder (body: BodyType): boolean {
  const { snakeX, snakeY } = body[0]
  return snakeX < 0 || snakeX > 352 || snakeY < 0 || snakeY > 352
}

export { CollisionFoodWithSnakeHead, CollisionFoodWithSnake, CollisionSnakeWithHead, CollisionSnakeHeadWithBorder }
