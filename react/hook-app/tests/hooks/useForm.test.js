import { render, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: "Cris",
        lastName: "Martinez"
    }
    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { formState, handleInputChange } = result.current
        expect(formState).toEqual(initialForm)
        expect(handleInputChange).toEqual(expect.any(Function))
    })
    test('Debe cambiar el nombre en el formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { formState, handleInputChange } = result.current
        const newValue = "Juan"

        act(()=>{
            handleInputChange({target: {name: "name", value: newValue}})
        })
        expect(result.current.formState.name).toBe(newValue)

    })
})