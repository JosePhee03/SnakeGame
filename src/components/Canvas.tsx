import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Canvas, SnakeHead } from '../../styles'

function CanvasSnake() {
  const [snakeCords, setSnakeCords] = useState({snakeY: 0, snakeX: 0})
  const { snakeX, snakeY } = snakeCords


  const moveSnake = (event:KeyboardEvent) => {
    const key = event.key

    switch (key) {
      case 'ArrowDown' :
        return setSnakeCords({snakeX, snakeY: snakeY + 30})
      case 'ArrowUp' :
        return setSnakeCords({snakeX, snakeY: snakeY - 30})
      case 'ArrowLeft' :
        return setSnakeCords({snakeY, snakeX: snakeX - 30})
      case 'ArrowRight' :
        return setSnakeCords({snakeY, snakeX: snakeX + 30})
    }

  }

  console.log('render')

  useEffect(() => {
    window.addEventListener('keydown', moveSnake)
  
    return () => {
      window.removeEventListener('keydown', moveSnake)
    }
  }, [snakeCords])
  



  return (
    <>
      <Canvas>
        <SnakeHead
          snakeY={snakeY} 
          snakeX={snakeX}
        />

      </Canvas>
      <Footer>
        <h6>SnakeX: {snakeCords.snakeX}</h6>
        <h6>SnakeY: {snakeCords.snakeY}</h6>
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