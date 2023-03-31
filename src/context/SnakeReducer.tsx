import { ClearLocalStorage, GetLocalStorage, SetLocalStorage } from '../helpers/localStorage'
import { BodyType, SnakeType, KeyTypes } from '../types/types'

export type ActionType =
 | { type: 'MOVE' | 'ADD', payload: BodyType }
 | { type: 'ARROW', payload: KeyTypes }
 | { type: 'PAUSE', payload: SnakeType }
 | { type: 'RESET' | 'GAME_OVER' }
 | { type: 'START' }

function SnakeReducer (state: SnakeType, action: ActionType): SnakeType {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        body: action.payload
      }
    case 'ARROW':
      return {
        ...state,
        direction: action.payload
      }
    case 'PAUSE':
      SetLocalStorage('SNAKE', action.payload)
      return {
        ...state,
        status: 'PAUSE',
        direction: null
      }
    case 'START':
      return GetLocalStorage('SNAKE')
    case 'ADD':
      return {
        ...state,
        body: action.payload
      }
    case 'GAME_OVER':
      ClearLocalStorage('SNAKE')
      return {
        ...state,
        status: 'GAME_OVER',
        direction: null
      }
    case 'RESET':
      return {
        status: 'START',
        body: [{ snakeX: 0, snakeY: 0 }],
        direction: 'ArrowRight'
      }
    default:
      return state
  }
}

export default SnakeReducer
