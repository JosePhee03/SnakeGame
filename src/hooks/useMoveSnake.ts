import { useEffect, useState } from 'react'

export function useMoveSnake (): { snakeX: number, snakeY: number } {
  const [snakeCords, setSnakeCoords] = useState({ snakeY: 0, snakeX: 0 })
  const { snakeX, snakeY } = snakeCords

  const moveSnake = (event: KeyboardEvent): void => {
    const key = event.key

    switch (key) {
      case 'ArrowDown':
        return setSnakeCoords({ snakeX, snakeY: snakeY + 30 })
      case 'ArrowUp':
        return setSnakeCoords({ snakeX, snakeY: snakeY - 30 })
      case 'ArrowLeft':
        return setSnakeCoords({ snakeY, snakeX: snakeX - 30 })
      case 'ArrowRight':
        return setSnakeCoords({ snakeY, snakeX: snakeX + 30 })
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveSnake)

    return () => {
      window.removeEventListener('keydown', moveSnake)
    }
  }, [snakeCords])

  return { snakeX, snakeY }
}
