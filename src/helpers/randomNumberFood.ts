import { FoodType } from '../types/types'

export const ramdomFood = (): FoodType => {
  const randomNumber = (): number => Math.round(Math.random() * 11) * 32
  return { foodX: randomNumber(), foodY: randomNumber() }
}
