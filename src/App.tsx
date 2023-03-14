import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles/styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { useMoveSnake } from './hooks/useMoveSnake'

function App (): JSX.Element {
  const { moveSnake } = useMoveSnake()

  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <Header>
            <h1>Snake</h1>
          </Header>
          <CanvasSnake />
          <ArrowBoard>
            <Arrow onClick={() => moveSnake(undefined, 'ArrowUp')}><ArrowIcon direction='ArrowUp' /></Arrow>
            <Arrow onClick={() => moveSnake(undefined, 'ArrowDown')}><ArrowIcon direction='ArrowDown' /></Arrow>
            <Arrow><ArrowIcon direction='ArrowLeft' /></Arrow>
            <Arrow><ArrowIcon direction='ArrowRight' /></Arrow>
          </ArrowBoard>
        </Section>

      </Main>
    </>
  )
}

export default App
