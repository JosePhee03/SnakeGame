import { useState } from 'react'
import { FoodType } from '../types/types'
import { ramdomFood } from '../helpers/randomNumberFood'

interface ReturnFood {
  food: FoodType
  GenerateNewFood: () => void
}

function useAddBody (): ReturnFood {
  const [food, setFood] = useState(ramdomFood)
  const GenerateNewFood = (): void => setFood(ramdomFood)
  return { food, GenerateNewFood }
}

export default useAddBody
