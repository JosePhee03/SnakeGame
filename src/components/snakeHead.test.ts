import { snakeSize } from '../styles/styles'
import { snakeHead } from './snakeHead'

test('the snake moves with the arrows', () => {
  expect(snakeHead([{ snakeX: 0, snakeY: 0 }], 'ArrowDown'))
    .toStrictEqual({ snakeX: 0, snakeY: snakeSize })
})
