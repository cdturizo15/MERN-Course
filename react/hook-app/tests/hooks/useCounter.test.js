import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import {useCounter} from '../../src/hooks/useCounter'

describe('Pruebas en useCounter', () => {
    test('Debe retornar los valores por defecto', () => {

        const {result} = renderHook(()=> useCounter())
        const {counter, decrement, increment, reset} = result.current
        expect(counter).toBe(1)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    })

    test('Debe retornar el valor esperado', () => {
        const {result} = renderHook(()=> useCounter(100))
        const {counter} = result.current
        expect(counter).toBe(100)
    })

    test('Debe incrementar el contador', () => {
        const {result} = renderHook(()=> useCounter(100))
        const {counter, increment} = result.current
        act(()=>{
            increment()
        })
        expect(result.current.counter).toBe(101)
    })
    test('Debe decrementar el contador', () => {
        const {result} = renderHook(()=> useCounter(100))
        const {counter, decrement} = result.current
        act(()=>{
            decrement()
        })
        expect(result.current.counter).toBe(99)
    })
    test('Debe reiniciar el contador', () => {
        const {result} = renderHook(()=> useCounter(100))
        const {counter, decrement,reset} = result.current
        act(()=>{
            decrement()
            reset()
        })
        expect(result.current.counter).toBe(100)
    })
})