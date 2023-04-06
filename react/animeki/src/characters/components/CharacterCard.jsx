import React from 'react'
import { NavLink } from 'react-router-dom'

export const CharacterCard = ({ character }) => {
    const name = character.name.replace(/\s/g, '')

    return (
        <div className='card-container'>
            <NavLink className='nav-link' to={'/character/'+character.id}>
                <div className="card m-3" >
                    <img className="card-img-top profile-img" alt={character.name} src={'/src/assets/' + name + '.jpeg'} />
                    <div className="card-body">
                        <h3 className='card-title text-center'>{character.name}</h3>
                        <h5 className='text-center text-secondary'>{character.animeName}</h5>
                    </div>
                </div>
            </NavLink>

        </div>
    )
}
