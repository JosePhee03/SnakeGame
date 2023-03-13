import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles'
import CanvasSnake from './components/canvas/CanvasSnake'

function App (): JSX.Element {
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
            <Arrow>Up</Arrow>
            <Arrow>Down</Arrow>
            <Arrow>Left</Arrow>
            <Arrow>Rigth</Arrow>
          </ArrowBoard>
        </Section>

      </Main>
    </>
  )
}

export default App
