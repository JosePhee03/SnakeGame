import { BodyType, SnakeType } from '../types/types'

type DispatchType = 'MOVE' | 'ADD'

export interface ActionType { type: DispatchType, payload: BodyType }

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
    default:
      return state
  }
}

export default SnakeReducer
