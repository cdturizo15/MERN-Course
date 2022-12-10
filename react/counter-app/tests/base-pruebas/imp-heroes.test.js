import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas de funciones heroes', () => { 
    test('getHeroeById debe retornar un heroe', () => {
        const heroe = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }
        const id = 2;

        const testHeroe = getHeroeById(id);

        expect(testHeroe).toStrictEqual(heroe);
    })
    test('getHeroByOwner retorna un arreglo de heroes',()=>{
        const lenDC = 3;
        const lenMarvel = 2;
        const ownerDC = 'DC';
        const ownerMarvel = 'Marvel';
        const DC = getHeroesByOwner(ownerDC);
        const Marvel = getHeroesByOwner(ownerMarvel);

        expect(DC.length).toBe(lenDC)
        expect(Marvel.length).toBe(lenMarvel)
    })
})