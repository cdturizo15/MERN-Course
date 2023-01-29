
import { fireEvent, render, screen } from "@testing-library/react"
import {TodoItem} from "../../src/useReducer/TodoItem"

describe('Pruebas en TodoItem', () => {

    const todo = {
        id: 1,
        description: "Hacer ejercicio",
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(()=> jest.clearAllMocks())


    test('Debe mostrar el pendiente a completar', () => {
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        const liElemtent = screen.getByRole('listitem')
        const spanElement = screen.getByLabelText('span')
        expect(liElemtent.className).toBe('list-group-item ')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })

    test('Debe mostrar el pendiente completado', () => {

        todo.done = true
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('Debe llamar onToggleTodo cuando se hace click', () => {
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('Debe llamar onDeleteTodo cuando se hace click', () => {
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} handleDelete={onDeleteTodoMock} />)
        const deleteButton = screen.getByRole('button', {name: 'Borrar'})
        fireEvent.click(deleteButton)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo)
    })
    
})