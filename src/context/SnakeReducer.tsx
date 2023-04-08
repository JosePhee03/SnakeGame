import { ClearLocalStorage, GetLocalStorage, SetLocalStorage } from '../helpers/localStorage'
import { ActionType, KeyTypes, SnakeEvents, SnakeType, StatusGame, UserEvent } from '../types/types'
import ramdomFood from '../helpers/randomFood'

function SnakeReducer (state: SnakeType, action: ActionType): SnakeType {
  switch (action.type) {
    case UserEvent.ARROW:
      return { ...state, direction: action.payload }

    case SnakeEvents.MOVE:
      return { ...state, body: action.payload }

    case SnakeEvents.ADD:
      return { ...state, body: action.payload, food: ramdomFood(action.payload) }

    case SnakeEvents.DIE:
      ClearLocalStorage('SNAKE')
      return { ...state, status: StatusGame.GAME_OVER, body: action.payload }

    case StatusGame.PAUSE: {
      const saveSnake: SnakeType = {
        ...state,
        status: StatusGame.PAUSE,
        body: action.payload.body,
        direction: action.payload.direction
      }
      SetLocalStorage('SNAKE', saveSnake)
      return saveSnake
    }

    case StatusGame.START: {
      const localSnake = GetLocalStorage('SNAKE') as SnakeType
      ClearLocalStorage('SNAKE')
      return {
        ...state,
        status: StatusGame.START,
        body: localSnake.body,
        direction: localSnake.direction
      }
    }

    case StatusGame.RESET:
      return {
        ...state,
        status: StatusGame.START,
        body: [{ snakeX: 0, snakeY: 0 }],
        direction: KeyTypes.ArrowRight
      }

    default:
      return state
  }
}

export default SnakeReducer
