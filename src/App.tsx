import { GlobalStyle, Main, Section } from './styles/styles'
import CanvasSnake from './components/CanvasSnake'
import HeaderMenu from './components/HeaderMenu'
import ArrowsBoard from './components/ArrowsBoard'
import SnakeProvider from './context/SnakeProvider'

function App (): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Section>
          <SnakeProvider>
            <HeaderMenu />
            <CanvasSnake />
            <ArrowsBoard />
          </SnakeProvider>
        </Section>
      </Main>
    </>
  )
}

export default App
