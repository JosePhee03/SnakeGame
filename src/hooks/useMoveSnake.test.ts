import { useMoveSnake } from './useMoveSnake'

test('prueba 1', () => {
  expect(useMoveSnake()).toBe({ snakeX: 0, snakeY: 0 })
})
