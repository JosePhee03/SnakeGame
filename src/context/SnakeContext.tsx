import { createContext, Dispatch } from 'react'
import { SnakeType } from '../types/types'
import { ActionType } from './SnakeReducer'

export interface SnakeContextType {
  Snake: SnakeType
  dispatch: Dispatch<ActionType>
}

const SnakeContext = createContext<SnakeContextType | null>(null)

export default SnakeContext
