import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles/styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'
import { BodyProvider } from './context/bodyContext'

function App (): JSX.Element {
  return (
    <BodyProvider>
      <GlobalStyle />
      <Main>
        <Section>
          <Header>
            <h1>Snake</h1>
          </Header>
          <CanvasSnake />
          <ArrowBoard>
            <Arrow><ArrowIcon direction='ArrowUp' /></Arrow>
            <Arrow><ArrowIcon direction='ArrowDown' /></Arrow>
            <Arrow><ArrowIcon direction='ArrowLeft' /></Arrow>
            <Arrow><ArrowIcon direction='ArrowRight' /></Arrow>
          </ArrowBoard>
        </Section>
      </Main>
    </BodyProvider>
  )
}

export default App
