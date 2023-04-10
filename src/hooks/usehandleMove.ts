import { useEffect } from 'react'
import { KeyTypes } from '../types/types'
import useSnake from './useSnake'

interface pressArrowType {
  pressArrow: (key: KeyTypes) => void
}

function useHandleMove (): pressArrowType {
  const { Snake, userPressArrowDispatch } = useSnake()
  const { direction } = Snake

  const pressArrow = (key: KeyTypes): void => userPressArrowDispatch(key)

  const keyPressEvent = (event: KeyboardEvent): void => {
    const eventKey = event.key
    const keys: KeyTypes[] = [KeyTypes.ArrowUp, KeyTypes.ArrowDown, KeyTypes.ArrowLeft, KeyTypes.ArrowRight]
    const key = keys.find(e => e === eventKey)
    if (key !== undefined) return pressArrow(key)
  }

  useEffect(() => {
    window.addEventListener('keydown', keyPressEvent)
    return () => {
      window.removeEventListener('keydown', keyPressEvent)
    }
  }, [direction])

  return { pressArrow }
}

export default useHandleMove
