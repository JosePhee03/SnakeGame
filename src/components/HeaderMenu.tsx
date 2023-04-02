import { useContext } from 'react'
import styled from 'styled-components'
import SnakeContext, { SnakeContextType } from '../context/SnakeContext'
import { Logo, Header } from '../styles/styles'
import { CrownLogo, PauseIcon } from './Icons'

function HeaderMenu (): JSX.Element {
  const { Snake, dispatch } = useContext(SnakeContext) as SnakeContextType
  const { body, status } = Snake

  const score = body.length - 1
  const padScore = score.toString().padStart(3, '000')

  const handlePause = (): void => {
    dispatch({ type: 'PAUSE', payload: Snake })
  }

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
