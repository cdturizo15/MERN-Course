import { screen, render } from "@testing-library/react"
import { useTodo } from "../../src/hooks/useTodo"
import { TodoApp } from '../../src/useReducer/TodoApp'

jest.mock('../../src/hooks/useTodo')

describe('Prueba en TodoApp', () => {

    const initialState = [
        { id: 1, desc: 'Hacer ejercicio', done: false },
        { id: 2, desc: 'Hacer cena', done: false },
    ]

    useTodo.mockReturnValue({
        state: initialState,
        handleSubmit: jest.fn(), 
        handleToggle:jest.fn(),
        handleDelete:jest.fn()
    })

    test('Debe mostrar el componente por defecto', () => {
        render(<TodoApp />)
        const firstTodo = screen.getByText('Hacer ejercicio')
        expect(firstTodo).toBeTruthy()
    })
})