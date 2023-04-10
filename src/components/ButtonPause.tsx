import { HeaderButton } from '../styles/styles'
import { PauseIcon } from './Icons'
import { StatusGame } from '../types/types'

interface Props {
  status: StatusGame | null
  pauseGameDispatch: () => void
}

function ButtonPause ({ status, pauseGameDispatch }: Props): JSX.Element {
  const handlePause = (): void => pauseGameDispatch()

  return (
    <HeaderButton>
      {status === 'START' &&
        <button onClick={handlePause}>
          <PauseIcon />
        </button>}
    </HeaderButton>
  )
}

export default ButtonPause
