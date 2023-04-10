import { createContext, Dispatch } from 'react'
import { ActionType, SnakeType } from '../types/types'

export interface SnakeContextType {
  Snake: SnakeType
  dispatch: Dispatch<ActionType>
}

const SnakeContext = createContext<SnakeContextType | null>(null)

export default SnakeContext
