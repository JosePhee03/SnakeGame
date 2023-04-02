import { useReducer } from 'react'
import { SnakeType } from '../types/types'
import SnakeContext from './SnakeContext'
import SnakeReducer from './SnakeReducer'
import { GetLocalStorage } from '../helpers/localStorage'

interface providerProps {
  children: JSX.Element | JSX.Element[]
}

export const INITIAL_VALUE: SnakeType = { status: null, body: [{ snakeX: 0, snakeY: 0 }], direction: null }

function SnakeProvider ({ children }: providerProps): JSX.Element {
  const [Snake, dispatch] = useReducer(SnakeReducer, GetLocalStorage('SNAKE') ?? INITIAL_VALUE)

  return (
    <SnakeContext.Provider value={{ Snake, dispatch }}>
      {children}
    </SnakeContext.Provider>
  )
}

export default SnakeProvider
