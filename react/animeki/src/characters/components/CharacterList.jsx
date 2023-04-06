import React, { useMemo } from 'react'
import { getCharactersByGender } from '../helpers/getCharactersByGender'
import { CharacterCard } from './CharacterCard'

export const CharacterList = ({ gender, name }) => {
  const characters = useMemo(() => getCharactersByGender(gender), [gender]) 
  return (

    <div className='cards-container'>
      {characters.map(character => {
        return (<CharacterCard character={character} key={character.id} />)
      })}
    </div>


  )
}
