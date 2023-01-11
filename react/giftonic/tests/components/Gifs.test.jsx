import { render } from "@testing-library/react"
import { Gifs } from "../../src/components/Gifs"
import { screen } from "@testing-library/react"

describe('Pruebas en <Gifs />', () => {

    const title = "saitama"
    const url = "https://one-punch.com/saitama.jpg"
    test('debe hacer match con snapshot', () => { 
        const {container} = render(<Gifs title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar imagen con url ', () => {
        render(<Gifs title={title} url={url} />)
        //screen.debug();
        //expect( screen.getByRole('img').src ).toBe(url);
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe(url)
        
    })
})