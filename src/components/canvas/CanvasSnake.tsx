import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles'
import { useMoveSnake } from '../../hooks/useMoveSnake'
import { useEffect, useState } from 'react'
import AddBody from '../AddBody'

function CanvasSnake (): JSX.Element {
  const INITIAL_VALUE = [{ x: 0, y: 0 }]

  const { snakeX, snakeY } = useMoveSnake()
  const [body, setBody] = useState(INITIAL_VALUE)

  useEffect(() => {
    let newBody = []

    const beforeBody = body

    newBody = body.map((coord, index) => (

      index === 0
        ? { ...coord, x: snakeX, y: snakeY }
        : { ...coord, x: beforeBody[index - 1].x, y: beforeBody[index - 1].y }
    ))

    if (snakeX === 300 && snakeY === 300) {
      AddBody(newBody)
    }

    setBody(newBody)
  }, [snakeX, snakeY])

  return (
    <>
      <Canvas>
        {body.map((coord, index) => (
          <SnakeHead
            key={index}
            snakeX={coord.x}
            snakeY={coord.y}
          />

        ))}
      </Canvas>
      <Footer>
        <h6>SnakeX: {snakeX}</h6>
        <h6>SnakeY: {snakeY}</h6>
        <h6>body: {body.length}</h6>
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
