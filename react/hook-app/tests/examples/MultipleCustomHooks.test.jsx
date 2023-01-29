import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from '../../src/examples/MultipleCustomHooks'
import { useFetch } from "../../src/hooks"
import { useCounter } from "../../src/hooks"

jest.mock("../../src/hooks/useCounter")
jest.mock('../../src/hooks/useFetch')

describe('Probando componente MultipleCustomHook', () => {

    const handleIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: handleIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })
    test('Debe retornar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        const nextButton = screen.getByRole('button', { name: "Get another quote" })
        expect(nextButton.disabled).toBeTruthy()
        screen.debug()
    })

    test('Debe mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Cris', quote: 'Im the danger' }],
            isLoading: false,
            hasError: null
        })
        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: "Get another quote" })

        expect(screen.getByText('Im the danger')).toBeTruthy()
        expect(nextButton.disabled).toBeFalsy()
        screen.debug()

    })

    test('Debe llamar la funcion de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Cris', quote: 'Im the danger' }],
            isLoading: false,
            hasError: null
        })


        render(<MultipleCustomHooks />)

        const nextButton = screen.getByRole('button', { name: "Get another quote" })
        fireEvent.click(nextButton)
        expect(handleIncrement).toHaveBeenCalled()
    })
})