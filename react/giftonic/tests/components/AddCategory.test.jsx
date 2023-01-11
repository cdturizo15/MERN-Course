import { fireEvent, render } from "@testing-library/react"
import { screen } from "@testing-library/react"
import {AddCategory} from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory setCategories={()=>{}} />);
        const input = screen.getByRole('textbox')
        fireEvent.input( input, {target: {value: 'Saitama'}});
        expect( input.value ).toBe('Saitama')
        //screen.debug()
    })
    test('debe llamar setCategories si el input tiene valor', () => {
        const inputValue = 'Saitama'
        const setCategories = jest.fn();

        render(<AddCategory setCategories={setCategories} />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input( input, {target: {value: inputValue}});
        fireEvent.submit(form)
        expect( setCategories ).toHaveBeenCalledWith(inputValue.toLowerCase());
    })
    
})