import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles'
import { useMoveSnake } from '../../hooks/useMoveSnake'

function CanvasSnake (): JSX.Element {
  const { snakeX, snakeY } = useMoveSnake()

  console.log('snakeX', snakeX)

  return (
    <>
      <Canvas>
        <SnakeHead
          snakeY={snakeY}
          snakeX={snakeX}
        />

      </Canvas>
      <Footer>
        <h6>SnakeX: {snakeX}</h6>
        <h6>SnakeY: {snakeY}</h6>
      </Footer>
    </>
  )
}

export default CanvasSnake

const Footer = styled.footer`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: beige;
`
