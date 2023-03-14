import { Arrow, ArrowBoard, GlobalStyle, Header, Main, Section } from './styles'
import CanvasSnake from './components/canvas/CanvasSnake'
import { ArrowIcon } from './components/Icons'

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
            <Arrow><ArrowIcon direction='up' /></Arrow>
            <Arrow><ArrowIcon direction='down' /></Arrow>
            <Arrow><ArrowIcon direction='left' /></Arrow>
            <Arrow><ArrowIcon direction='right' /></Arrow>
          </ArrowBoard>
        </Section>

      </Main>
    </>
  )
}

export default App
