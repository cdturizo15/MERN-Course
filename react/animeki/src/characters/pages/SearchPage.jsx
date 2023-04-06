import React from 'react'
import { useLocation } from 'react-router-dom'
import { CharacterSearch } from '../components/CharacterSearch'
import { SearchInput } from '../components/SearchInput'

export const SearchPage = () => {
  const location = useLocation()
  const search = location.pathname.split('/').slice(-1)[0]
  return (

    <div className='container-fluid'>
      <SearchInput></SearchInput>
      <CharacterSearch name={search} />
    </div>
  )
}
