import {getHeroeByIdAsync} from '../../src/base-pruebas/09-promesas'

describe('Pruebas en promesas', () => { 
    test('Debe retornar un heroe', async () => {
        const id = 1;
        const batman = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        }
        const testHeroe = await getHeroeByIdAsync(id);
        expect(testHeroe).toStrictEqual(batman)
    })
})