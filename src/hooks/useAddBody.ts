import { useEffect } from 'react'
import { ActionType } from '../context/SnakeReducer'
import { BodyType } from '../types/types'

function useAddBody (body: BodyType, dispatch: React.Dispatch<ActionType>): void {
  const { snakeX, snakeY } = body[0]

  useEffect(() => {
    const newBody = [...body]
    newBody.push({ snakeX: -30, snakeY: -30 })
    if (snakeX === 320 && snakeY === 320) {
      dispatch({ type: 'ADD', payload: newBody })
    }
  }, [snakeX, snakeY])
}

export default useAddBody
