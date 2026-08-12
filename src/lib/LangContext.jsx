import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext(null)
const STORAGE_KEY = 'saso-pitch-lang'

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'no'
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'no'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

export function formatNumber(value, lang) {
  return new Intl.NumberFormat(lang === 'no' ? 'nb-NO' : 'en-US').format(value)
}
