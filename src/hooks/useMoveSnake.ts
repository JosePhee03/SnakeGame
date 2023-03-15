import { useEffect, useState } from 'react'
import { bodyType, keyTypes } from '../types/types'

type moveSnakeType = (event?: KeyboardEvent, key?: keyTypes) => void

export function useMoveSnake (body: bodyType): { snakeX: number, snakeY: number, moveSnake: moveSnakeType } {
  const [newBody, setNewBody] = useState(body[0])
  const { snakeX, snakeY } = newBody

  const moveSnake = (event?: KeyboardEvent, key?: keyTypes): void => {
    const keyEvent = event?.key

    switch (keyEvent ?? key) {
      case 'ArrowDown':
        return setNewBody({ snakeX, snakeY: snakeY + 30 })
      case 'ArrowUp':
        return setNewBody({ snakeX, snakeY: snakeY - 30 })
      case 'ArrowLeft':
        return setNewBody({ snakeY, snakeX: snakeX - 30 })
      case 'ArrowRight':
        return setNewBody({ snakeY, snakeX: snakeX + 30 })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveSnake)

    return () => {
      window.removeEventListener('keydown', moveSnake)
    }
  }, [newBody])

  return { snakeX, snakeY, moveSnake }
}
