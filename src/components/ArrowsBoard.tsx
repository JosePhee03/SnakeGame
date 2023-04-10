import useHandleMove from '../hooks/usehandleMove'
import { Arrow, Board } from '../styles/styles'
import { KeyTypes } from '../types/types'
import { ArrowIcon } from './Icons'

function ArrowsBoard (): JSX.Element {
  const { pressArrow } = useHandleMove()
  return (
    <Board>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowUp)}><ArrowIcon direction={KeyTypes.ArrowUp} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowDown)}><ArrowIcon direction={KeyTypes.ArrowDown} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowLeft)}><ArrowIcon direction={KeyTypes.ArrowLeft} /></Arrow>
      <Arrow onClick={() => pressArrow(KeyTypes.ArrowRight)}><ArrowIcon direction={KeyTypes.ArrowRight} /></Arrow>
    </Board>
  )
}

export default ArrowsBoard
