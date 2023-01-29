import {todoReducer} from '../../src/useReducer/todoReducer'
import { useTodo } from '../../src/hooks/useTodo'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'


describe('Pruebas en todo reducer', () => {

    const initialState = [{
        id: 1,
        description: "Demo todo",
        done: false
    }]

    const newTodo = {
        id: 2,
        description: 'Second demo',
        done: false
    }


    test('Debe retornar el estado el inicial', () => {
        const newState = todoReducer( initialState, {})
        expect( newState ).toBe(initialState)
    })

    test('Debe agregar un Todo', ()=>{
        const action = {
            type: '[TODO] addTodo',
            payload: newTodo
        }

        const newState = todoReducer( initialState, action)

        expect(newState).toContain( newTodo )
        expect( newState.length ).toBe(2)
    })

    test('Debe elimar un Todo', ()=>{
        const id = 1

        const action = {
            type: '[TODO] deleteTodo',
            payload: id
        }

        const newState = todoReducer( initialState, action)

        expect( newState.length ).toBe(0)
    })

    test('Debe realizar toggle de un todo', ()=>{
        const id = 1
        const action = {
            type: '[TODO] toggleTodo',
            payload: id
        }

        const newState = todoReducer( initialState, action)
        expect( newState[id-1].done ).toBeTruthy()
    })
})