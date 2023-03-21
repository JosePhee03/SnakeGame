import { BodyType, SnakeType } from '../types/types'
import { INITIAL_VALUE } from './SnakeProvider'

export type ActionType =
 | { type: 'MOVE' | 'ADD', payload: BodyType }
 | { type: 'START' }
 | { type: 'RESET' }
 | { type: 'GAME_OVER' }

function SnakeReducer (state: SnakeType, action: ActionType): SnakeType {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        body: action.payload
      }
    case 'START':
      return {
        ...state,
        status: 'START',
        body: [{ snakeX: 0, snakeY: 0 }],
        direction: 'ArrowRight'
      }
    case 'ADD':
      return {
        ...state,
        body: action.payload
      }
    case 'GAME_OVER':
      return {
        ...state,
        status: 'GAME_OVER',
        body: [{ snakeX: 0, snakeY: 0 }],
        direction: null
      }
    case 'RESET':
      return INITIAL_VALUE
    default:
      return state
  }
}

export default SnakeReducer
