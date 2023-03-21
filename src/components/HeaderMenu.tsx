import { useContext } from 'react'
import styled from 'styled-components'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import { Logo, Header } from '../styles/styles'
import { CrownLogo, Pause } from './Icons'

function HeaderMenu (): JSX.Element {
  const { Snake } = useContext(SnakeContext) as SnakeContextType

  return (
    <Header>
      <Score>
        <h6>Score</h6>
        <h5>{'00' + Snake.body.length.toString()}</h5>
      </Score>
      <Logo>
        <CrownLogo />
        <h1>Snake</h1>
      </Logo>
      <HeaderButton><Pause /></HeaderButton>
    </Header>
  )
}

export default HeaderMenu

const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 4px white;
  font-family: 'Press Start 2P', cursive;
  align-self: stretch;

  h6 {
    font-size: 12px;
  }

  h5 {
    font-size: 16px;
  }
`

const HeaderButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background: #ffffff50;
  }
`
