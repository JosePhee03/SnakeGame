import { useReducer } from 'react'
import { SnakeType } from '../types/types'
import SnakeContext from './SnakeContext'
import SnakeReducer from './SnakeReducer'

interface providerProps {
  children: JSX.Element | JSX.Element[]
}

export const INITIAL_VALUE: SnakeType = { status: 'START', body: [{ snakeX: 0, snakeY: 0 }], direction: 'ArrowRight' }

function SnakeProvider ({ children }: providerProps): JSX.Element {
  const [Snake, dispatch] = useReducer(SnakeReducer, INITIAL_VALUE)

  return (
    <SnakeContext.Provider value={{ Snake, dispatch }}>
      {children}
    </SnakeContext.Provider>
  )
}

export default SnakeProvider
