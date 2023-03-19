import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles/styles'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from '../../context/SnakeContext'

function CanvasSnake (): JSX.Element {
  const { Snake } = useContext(SnakeContext) as SnakeContextType
  const { body } = Snake

  return (
    <>
      <Canvas>
        {body.map((coord, index) => (
          <SnakeHead
            key={index}
            snakeX={coord.snakeX}
            snakeY={coord.snakeY}
          />

        ))}
      </Canvas>
    </>
  )
}

export default CanvasSnake
