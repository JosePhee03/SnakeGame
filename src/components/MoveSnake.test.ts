import { MoveSnake } from './MoveSnake'

test('the snake moves with the arrows', () => {
  expect(MoveSnake([{ snakeX: 0, snakeY: 0 }], 'ArrowDown'))
    .toStrictEqual({ snakeX: 0, snakeY: 30 })
})
