import React from 'react'
import { CharacterList } from '../components/CharacterList'

export const MalePage = () => {
  return (
    <div className='container-fluid'>
      <CharacterList gender={'Male'} />
    </div>
  )
}
