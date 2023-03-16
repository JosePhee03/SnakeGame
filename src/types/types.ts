export type KeyTypes =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'

export type StatusType = 'START' | 'PAUSE'

export interface DirectionType {
  direction: KeyTypes
}

export interface SnakeCoords { snakeX: number, snakeY: number }

export type BodyType = SnakeCoords[]

export interface SnakeType {
  status: StatusType | null
  body: BodyType
  direction: KeyTypes | null
}
