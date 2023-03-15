export type keyTypes =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'ArrowLeft'
  | 'ArrowRight'

export interface directionType {
  direction: keyTypes
}

export type bodyType = Array<{ snakeX: number, snakeY: number }>
