import { Logo, Header } from '../styles/styles'
import { CrownLogo } from './Icons'
import ScoreBoard from './ScoreBoard'
import ButtonPause from './ButtonPause'
import { useMemo } from 'react'
import useSnake from '../hooks/useSnake'

function HeaderMenu (): JSX.Element {
  const { Snake, pauseGameDispatch } = useSnake()
  const { status, body, food } = Snake

  const buttonPause = useMemo(() => (
    <ButtonPause status={status} pauseGameDispatch={pauseGameDispatch} />
  ), [status])

  const scoreBoard = useMemo(() => (
    <ScoreBoard body={body} food={food} />
  ), [food, status])

  const logo = useMemo(() => (
    <Logo>
      <CrownLogo />
      <h1>Snake</h1>
    </Logo>
  ), [])

  return (
    <Header>
      {scoreBoard}
      {logo}
      {buttonPause}
    </Header>
  )
}

export default HeaderMenu
