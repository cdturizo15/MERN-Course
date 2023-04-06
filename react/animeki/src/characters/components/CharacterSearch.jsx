import React, { useMemo } from 'react'
import { getCharactersByName } from '../helpers/getCharacterByName'
import { CharacterCard } from './CharacterCard'
import { CharacterNotFound } from './CharacterNotFound'

export const CharacterSearch = ({ name }) => {
  const characters = useMemo(() => getCharactersByName(name), [name]) 
  return (

    <div className='cards-container'>

      {characters.length == 0 ? <CharacterNotFound></CharacterNotFound> : characters.map(character => {
        return (<CharacterCard character={character} key={character.id} />)
      })}
    </div>


  )
}
