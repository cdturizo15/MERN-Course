import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr'

describe('Prueba destructuracion de arreglo', () => { 
    test('debe retornar string y un numero', () => { 
        const [letters, numbers] = retornaArreglo();

        expect( typeof letters ).toBe('string')
        expect( typeof numbers ).toBe('number')
    })
 })