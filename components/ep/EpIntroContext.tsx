'use client'

import React, { createContext, useContext, useState } from 'react'

interface EpIntroContextType {
  done: boolean
  setDone: () => void
}

const EpIntroContext = createContext<EpIntroContextType>({
  done: false,
  setDone: () => {},
})

export function EpIntroProvider({ children }: { children: React.ReactNode }) {
  const [done, setDoneState] = useState(false)
  const setDone = () => setDoneState(true)
  return (
    <EpIntroContext.Provider value={{ done, setDone }}>
      {children}
    </EpIntroContext.Provider>
  )
}

export function useEpIntro() {
  return useContext(EpIntroContext)
}
