import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles/styles'
import { useContext } from 'react'
import SnakeContext, { SnakeContextType } from '../../context/SnakeContext'

function CanvasSnake (): JSX.Element {
  const { Snake } = useContext(SnakeContext) as SnakeContextType
  const { body } = Snake
  const { snakeX, snakeY } = body[0]

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
      <Footer>
        <h6>SnakeX: {snakeX}</h6>
        <h6>SnakeY: {snakeY}</h6>
        <h6>body: {JSON.stringify(body)}</h6>
      </Footer>
    </>
  )
}

export default CanvasSnake

const Footer = styled.footer`
  position: absolute;
  top: 0;
  right: 0;
  background-color: beige;
`
