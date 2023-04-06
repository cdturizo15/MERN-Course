import React from 'react'
import { CharacterContext } from './CharacterContext'
import { SearchInput } from '../components/SearchInput'

export const CharacterProvider = ({ children, value }) => {

  return (
    <CharacterContext.Provider value={{ search: value }}>
      {children}
    </CharacterContext.Provider>
  )
}