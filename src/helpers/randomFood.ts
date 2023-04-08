import { CollisionFoodWithSnake } from '../components/Collisions'
import { BodyType, FoodType } from '../types/types'

function ramdomFood (body: BodyType): FoodType {
  const randomNumber = (): number => Math.round(Math.random() * 11) * 32
  const newFood: FoodType = { foodX: randomNumber(), foodY: randomNumber() }

  if (CollisionFoodWithSnake(body, newFood)) return ramdomFood(body)
  else return newFood
}

export default ramdomFood
