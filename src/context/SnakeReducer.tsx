import { ClearLocalStorage, GetLocalStorage, SetLocalStorage } from '../helpers/localStorage'
import { SnakeType, KeyTypes, BodyType } from '../types/types'
import ramdomFood from '../helpers/randomFood'

export type ActionType =
 | { type: 'MOVE' | 'ADD' | 'GAME_OVER', payload: BodyType }
 | { type: 'ARROW', payload: KeyTypes }
 | { type: 'PAUSE', payload: SnakeType }
 | { type: 'RESET' }
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
    case 'PAUSE': {
      const saveSnake: SnakeType = {
        ...state,
        status: 'PAUSE',
        body: action.payload.body,
        direction: action.payload.direction
      }
      SetLocalStorage('SNAKE', saveSnake)
      return saveSnake
    }
    case 'START': {
      const localSnake = GetLocalStorage('SNAKE') as SnakeType
      ClearLocalStorage('SNAKE')
      return {
        ...state,
        status: 'START',
        body: localSnake.body,
        direction: localSnake.direction
      }
    }
    case 'ADD':
      return {
        ...state,
        body: action.payload,
        food: ramdomFood(action.payload)
      }
    case 'GAME_OVER':
      ClearLocalStorage('SNAKE')
      return {
        ...state,
        status: 'GAME_OVER',
        body: action.payload
      }
    case 'RESET':
      return {
        ...state,
        status: 'START',
        body: [{ snakeX: 0, snakeY: 0 }],
        direction: 'ArrowRight'
      }
    default:
      return state
  }
}

export default SnakeReducer
