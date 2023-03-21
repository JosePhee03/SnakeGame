import { useEffect } from 'react'
import { ActionType } from '../context/SnakeReducer'
import { KeyTypes } from '../types/types'

interface pressArrowType {
  pressArrow: (key: KeyTypes) => void
}

function useHandleMove (direction: KeyTypes | null, dispatch: React.Dispatch<ActionType>): pressArrowType {
  const pressArrow = (key: KeyTypes): void => {
    dispatch({ type: 'ARROW', payload: key })
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
  }, [direction])

  return { pressArrow }
}

export default useHandleMove
