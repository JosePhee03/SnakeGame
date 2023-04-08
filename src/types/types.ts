export enum KeyTypes {
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}

export interface DirectionType {
  direction: KeyTypes
}

export interface SnakeCoords { snakeX: number, snakeY: number }

export type BodyType = SnakeCoords[]

export interface FoodType { foodX: number, foodY: number }
export interface SnakeType {
  status: StatusGame | null
  body: BodyType
  direction: KeyTypes | null
  food: FoodType
}

export enum StatusGame {
  PAUSE = 'PAUSE',
  RESET = 'RESET',
  START = 'START',
  GAME_OVER = 'GAME_OVER'
}

export enum SnakeEvents {
  MOVE = 'MOVE',
  ADD = 'ADD',
  DIE = StatusGame.GAME_OVER
}

export enum UserEvent { ARROW = 'ARROW'}

export type ActionType =
  | { type: SnakeEvents, payload: BodyType }
  | { type: UserEvent, payload: KeyTypes }
  | { type: StatusGame.PAUSE, payload: SnakeType }
  | { type: StatusGame.RESET }
  | { type: StatusGame.START }
