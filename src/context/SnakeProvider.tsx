import { useReducer } from 'react'
import { BodyType, KeyTypes, SnakeEvents, SnakeType, StatusGame, UserEvent } from '../types/types'
import SnakeContext from './SnakeContext'
import SnakeReducer from './SnakeReducer'
import { GetLocalStorage } from '../helpers/localStorage'
import ramdomFood from '../helpers/randomFood'

interface providerProps {
  children: JSX.Element | JSX.Element[]
}

const initialBody: BodyType = [{ snakeX: 0, snakeY: 0 }]

export const INITIAL_VALUE: SnakeType = {
  status: null,
  body: initialBody,
  direction: null,
  food: ramdomFood(initialBody)
}

const [Snake, dispatch] = useReducer(SnakeReducer, GetLocalStorage('SNAKE') ?? INITIAL_VALUE)
function SnakeProvider ({ children }: providerProps): JSX.Element {
  return (
    <SnakeContext.Provider value={{ Snake, dispatch }}>
      {children}
    </SnakeContext.Provider>
  )
}

const pauseGameDispatch = (Snake: SnakeType): void => dispatch({ type: StatusGame.PAUSE, payload: Snake })
const startGameDispatch = (): void => dispatch({ type: StatusGame.START })
const resetGameDispatch = (): void => dispatch({ type: StatusGame.RESET })
const snakeEventDispatch = (snakeEvents: SnakeEvents, newBody: BodyType): void => dispatch({ type: snakeEvents, payload: newBody })
const userPressArrowDispatch = (key: KeyTypes): void => dispatch({ type: UserEvent.ARROW, payload: key })

export { pauseGameDispatch, startGameDispatch, resetGameDispatch, snakeEventDispatch, userPressArrowDispatch }
export default SnakeProvider
