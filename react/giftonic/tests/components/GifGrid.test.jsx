import { GifGrid } from "../../src/components/GifGrid"
import { screen,render } from "@testing-library/react"
import { useFetchGifs } from "../../src/Hooks/useFetchGifs"

jest.mock("../../src/Hooks/useFetchGifs")

describe('Prueba en <GifGrid/>', () => {
    const category = 'Saitama'
    test('debe cargar al inicio', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect( screen.getByText('Is loading...') )
    })

    test('debe mostrar items cuando se cargan las imagenes del servicio', () => {
        const gifs = [{
            id: 'abc',
            title: 'Si',
            url: 'sifa;sdfk'
        }]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
    })
})