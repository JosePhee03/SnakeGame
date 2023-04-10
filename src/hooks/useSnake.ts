import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import { BodyType, KeyTypes, SnakeEvents, SnakeType, StatusGame, UserEvent } from '../types/types'

interface ReturnType {
  Snake: SnakeType
  pauseGameDispatch: (Snake: SnakeType) => void
  startGameDispatch: () => void
  resetGameDispatch: () => void
  snakeEventDispatch: (snakeEvents: SnakeEvents, newBody: BodyType) => void
  userPressArrowDispatch: (key: KeyTypes) => void
}

function useSnake (): ReturnType {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType

  const pauseGameDispatch = (Snake: SnakeType): void => dispatch({ type: StatusGame.PAUSE, payload: Snake })
  const startGameDispatch = (): void => dispatch({ type: StatusGame.START })
  const resetGameDispatch = (): void => dispatch({ type: StatusGame.RESET })
  const snakeEventDispatch = (snakeEvents: SnakeEvents, newBody: BodyType): void => dispatch({ type: snakeEvents, payload: newBody })
  const userPressArrowDispatch = (key: KeyTypes): void => dispatch({ type: UserEvent.ARROW, payload: key })

  return {
    Snake,
    pauseGameDispatch,
    startGameDispatch,
    resetGameDispatch,
    snakeEventDispatch,
    userPressArrowDispatch
  }
}

export default useSnake
