import {characters} from '../data/characters'

export const getCharactersById = (id) =>{
    return characters.filter(character => character.id===id)
}