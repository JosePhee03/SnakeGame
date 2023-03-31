import { ButtonGame, Modal } from '../styles/styles'
import { StatusType } from '../types/types'

function ModalGame ({ status, handleButton }: { status: StatusType | null, handleButton: () => void }): JSX.Element {
  const STATUS = {
    GAME_OVER: 'Game Over',
    PAUSE: 'Pause',
    START: ''
  }

  return (
    <Modal>
      <h2>
        {status === null ? 'Press Start' : STATUS[status]}
      </h2>
      <ButtonGame onClick={handleButton}>Start</ButtonGame>
    </Modal>
  )
}

export default ModalGame
