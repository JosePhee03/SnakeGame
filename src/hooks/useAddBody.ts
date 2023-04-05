import { useCallback, useState } from 'react'

export interface FoodType { foodX: number, foodY: number }

interface ReturnType {
  food: FoodType
  GenerateNewFood: () => void
}

function useAddBody (): ReturnType {
  const RandomNumber = (): number => Math.round(Math.random() * 11) * 32

  console.log('render food')

  const foodCoords = useCallback((): FoodType => {
    console.log('render callback')
    const foodX = RandomNumber()
    const foodY = RandomNumber()
    return { foodX, foodY }
  }, [])

  const [food, setFood] = useState(foodCoords)

  const GenerateNewFood = (): void => {
    setFood(foodCoords)
  }

  return { food, GenerateNewFood }
}

export default useAddBody
