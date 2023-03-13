import React from "react"

export function MoveSnake(event:KeyboardEvent, snakeCords:cordsType, setSnakeCords:setCordsType) {

  const [snakeX, snakeY] = snakeCords

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


type setCordsType = React.Dispatch<React.SetStateAction<{
  snakeY: number;
  snakeX: number;
}>>

type cordsType = {
  snakeY: number;
  snakeX: number;
}