import { getGifs } from "../../src/services/getGifs"


describe('test sobre servicio getGifs', () => {
    const gifTest = {
        id: expect.any( String),
        title: expect.any(String),
        url: expect.any(String)
    }
    test('debe regresar un arreglo de gifs', async () => {
        const gifs = await getGifs('one punch')
        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual(gifTest)

    })
})