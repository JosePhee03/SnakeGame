import styled from 'styled-components'
import { Logo, Header } from '../styles/styles'
import { CrownLogo, PauseIcon } from './Icons'
import { SnakeType } from '../types/types'

interface Props {
  Snake: SnakeType
  handlePause: () => void
}

function HeaderMenu ({ Snake, handlePause }: Props): JSX.Element {
  const { body, status } = Snake

  const score = body.length - 1
  const padScore = score.toString().padStart(3, '000')

  return (
    <Header>
      <Score>
        <div>
          <h6>Score</h6>
          <h5>{padScore}</h5>
        </div>
      </Score>
      <Logo>
        <CrownLogo />
        <h1>Snake</h1>
      </Logo>
      <HeaderButton>
        {status === 'START' &&
          <button onClick={handlePause}>
            <PauseIcon />
          </button>}
      </HeaderButton>
    </Header>
  )
}

export default HeaderMenu

const Score = styled.div`
  display: flex;
  padding-left: 20px;
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 0 0 4px white;
    font-family: 'Press Start 2P', cursive;
    color: white;
  }
  
  h6 {
    font-size: 12px;
  }
  
  h5 {
    font-size: 16px;
  }
`

const HeaderButton = styled.div`
  display: flex;
  justify-content: end;

  button {
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      background: #ffffff50;
    }
  }
`
