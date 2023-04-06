import React from 'react'
import { useForm } from '../../hooks/useForm'
import { CharacterList } from '../components/CharacterList'
import { SearchInput } from '../components/SearchInput'

export const AllCharacterPage = () => {

  return (
    <>
      <SearchInput></SearchInput>
      <CharacterList gender={'Both'} />
    </>
  )
}
