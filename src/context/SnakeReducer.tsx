import { BodyType, SnakeType } from '../types/types'
import { INITIAL_VALUE } from './SnakeProvider'

export type ActionType =
 | { type: 'MOVE' | 'ADD', payload: BodyType }
 | { type: 'RESET', payload: null }

function SnakeReducer (state: SnakeType, action: ActionType): SnakeType {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        body: action.payload
      }
    case 'ADD':
      return {
        ...state,
        body: action.payload
      }
    case 'RESET':
      return INITIAL_VALUE
    default:
      return state
  }
}

export default SnakeReducer
