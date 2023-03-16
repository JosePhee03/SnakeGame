import ReactDOM from 'react-dom/client'
import App from './App'
import SnakeProvider from './context/SnakeProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SnakeProvider>
    <App />
  </SnakeProvider>
)
