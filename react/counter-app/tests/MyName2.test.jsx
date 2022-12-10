import { render, screen } from "@testing-library/react"
import MyName from "../src/MyName"

 

describe('Pruebas MyName component', () => {
    test('debe hacer match con snapshot', () => {
        const {container} = render( <MyName name={'Cristian'}description={'crack'}  /> )
        expect(container).toMatchSnapshot();
    })
    test('Un h1 presenta tu nombre', () => {
        const name = 'My name is Cristian'
        render( <MyName name={'Cristian'}description={'crack'}  /> )
        expect(screen.getByTestId('test-title').innerHTML).toBe(name)
    })
})