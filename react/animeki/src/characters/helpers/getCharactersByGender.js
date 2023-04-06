import {characters} from '../data/characters'

export const getCharactersByGender = (gender) =>{
    const validGenders = ['Male', 'Female', 'Both']
    if (!validGenders.includes(gender)){
        throw new Error(`${gender} no es un genero valido`)
    }
    if(gender==='Both'){
        return characters
    }
    return characters.filter(character => character.gender===gender)
}