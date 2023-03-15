import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles/styles'
import { useMoveSnake } from '../../hooks/useMoveSnake'
import { useContext, useEffect } from 'react'
import { BodyContext, bodyContextType } from '../../context/bodyContext'

function CanvasSnake (): JSX.Element {
  const { body, setBody } = useContext(BodyContext) as bodyContextType
  const { snakeX, snakeY } = useMoveSnake(body)

  useEffect(() => {
    let newBody = body

    const beforeBody = body

    newBody = body.map((coord, index) => (

      index === 0
        ? { ...coord, snakeY, snakeX }
        : { ...coord, snakeX: beforeBody[index - 1].snakeX, snakeY: beforeBody[index - 1].snakeY }
    ))

    if (snakeX === 300 && snakeY === 300) {
      newBody.push({ snakeX: -30, snakeY: -30 })
      setBody(newBody)
    } else {
      setBody(newBody)
    }
  }, [snakeX, snakeY])

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
