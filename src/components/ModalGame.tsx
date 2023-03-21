import { ButtonGame, Modal } from '../styles/styles'
import { StatusType } from '../types/types'

function ModalGame ({ status, handleStart }: { status: StatusType | null, handleStart: () => void }): JSX.Element {
  return (
    <Modal>
      <h2>{status === 'START'
        ? 'Start Game'
        : status === 'GAME_OVER'
          ? 'GameOver'
          : ''}
      </h2>
      <ButtonGame onClick={handleStart}>Start</ButtonGame>
    </Modal>
  )
}

export default ModalGame
