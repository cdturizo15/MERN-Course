import CounterApp from '../src/CounterApp'
import { fireEvent, render, screen } from "@testing-library/react"


describe('Probando componente Counter ', () => {
    test('Probando match con snapshot', () => {
        const {container} = render( <CounterApp value={0}/> )
        expect(container).toMatchSnapshot();
    })
    test('Valor inicial 0', () => {
        render( <CounterApp value={0}/> )
        expect(screen.findByText('0')).toBeTruthy();
    })

    test('debe aumentar en uno la cuenta', () => {
        render( <CounterApp value={0}/> )
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByTestId('value').innerHTML ).toContain('1')
    })
    test('debe disminuir en uno la cuenta', () => {
        render( <CounterApp value={0}/> )
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByTestId('value').innerHTML ).toContain('1')
    })
    test('debe reiniciar la cuenta', () => {
        render( <CounterApp value={0}/> )
        fireEvent.click( screen.getByText('Reset') )
        expect( screen.getByTestId('value').innerHTML ).toContain('0')
    })
})