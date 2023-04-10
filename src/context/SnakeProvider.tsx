import { useReducer } from 'react'
import { BodyType, SnakeType } from '../types/types'
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

function SnakeProvider ({ children }: providerProps): JSX.Element {
  const [Snake, dispatch] = useReducer(SnakeReducer, GetLocalStorage('SNAKE') ?? INITIAL_VALUE)
  return (
    <SnakeContext.Provider value={{ Snake, dispatch }}>
      {children}
    </SnakeContext.Provider>
  )
}

export default SnakeProvider
