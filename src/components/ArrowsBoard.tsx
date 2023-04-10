import { useEffect, useMemo } from 'react'
import { Arrow, Board } from '../styles/styles'
import { KeyTypes } from '../types/types'
import { ArrowIcon } from './Icons'
import useSnake from '../hooks/useSnake'
import { OPPOSITE_DIRECTIONS } from '../constants/snakePreset'

function ArrowsBoard (): JSX.Element {
  const { Snake, userPressArrowDispatch } = useSnake()
  const { direction } = Snake

  const pressArrow = (key: KeyTypes): void => {
    if (OPPOSITE_DIRECTIONS[direction as KeyTypes] !== key) {
      userPressArrowDispatch(key)
    }
  }

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

  return useMemo(() => (
    <Board>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowUp)}><ArrowIcon direction={KeyTypes.ArrowUp} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowDown)}><ArrowIcon direction={KeyTypes.ArrowDown} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowLeft)}><ArrowIcon direction={KeyTypes.ArrowLeft} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowRight)}><ArrowIcon direction={KeyTypes.ArrowRight} /></Arrow>
    </Board>
  ), [])
}

export default ArrowsBoard
