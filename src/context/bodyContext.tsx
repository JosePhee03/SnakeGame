import { createContext, Dispatch, useState } from 'react'

export interface bodyContextType {
  body: Array<{ snakeX: number, snakeY: number }>
  setBody: Dispatch<any>
}

interface providerProps {
  children: JSX.Element | JSX.Element[]
}

const BodyContext = createContext<bodyContextType | null>(null)

function BodyProvider ({ children }: providerProps): JSX.Element {
  const [body, setBody] = useState([{ snakeX: 0, snakeY: 0 }])

  return (
    <BodyContext.Provider value={{ body, setBody }}>
      {children}
    </BodyContext.Provider>
  )
}

export { BodyContext, BodyProvider }
