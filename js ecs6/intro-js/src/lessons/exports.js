import heroes, {owners} from "../data/heroes";

const [owner1] = owners
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
};
export const getHeroByOwner = (owner) => heroes.filter(heroe => heroe.owner===owner)

console.log(getHeroeById(10));
console.log(getHeroByOwner(owner1))