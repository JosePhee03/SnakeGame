import { useEffect } from 'react'
import { ActionType } from '../context/SnakeReducer'
import { BodyType, KeyTypes } from '../types/types'
import AddBody from '../components/addBody'
import moveSnake from '../components/moveSnake'

interface pressArrowType {
  pressArrow: (key: KeyTypes) => void
}

function useHandleMove (body: BodyType, dispatch: React.Dispatch<ActionType>): pressArrowType {
  const { snakeX, snakeY } = body[0]

  const pressArrow = (key: KeyTypes): void => {
    const { newBody, newSnakeHead } = moveSnake(key, body)
    const newSnakeX = newSnakeHead.snakeX
    const newSnakeY = newSnakeHead.snakeY
    if (newSnakeX === 320 && newSnakeY === 320) {
      const addBody = AddBody(newBody)
      return dispatch({ type: 'MOVE', payload: addBody })
    }
    dispatch({ type: 'MOVE', payload: newBody })
  }

  const keyPressEvent = (event: KeyboardEvent): void => {
    const eventKey = event.key
    const keys: KeyTypes[] = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    const key = keys.find(e => e === eventKey)
    if (key !== undefined) pressArrow(key)
  }

  useEffect(() => {
    window.addEventListener('keydown', keyPressEvent)
    console.log('render')

    return () => {
      window.removeEventListener('keydown', keyPressEvent)
    }
  }, [snakeX, snakeY])

  return { pressArrow }
}

export default useHandleMove
