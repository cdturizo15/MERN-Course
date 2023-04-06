import {characters} from '../data/characters'

export const getCharactersByName = (name) =>{
    return characters.filter(character => character.nick.toLowerCase().includes(name.toLowerCase().replace(/[^A-Za-z]+/g, '')) || character.name.toLowerCase().replace(/\s/g, '').includes(name.toLowerCase().replace(/[^A-Za-z]+/g, '')))

}