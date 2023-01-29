import { render, screen } from "@testing-library/react"
import { Login } from '../../src/useContext/Login'
import {UserProvider} from '../../src/context/UserProvider'

describe('Pruebas en Login page', () => {
    test('Debe mostrar el componente sin el usuario', () => {

        render(
            <UserProvider>
                <Login />
            </UserProvider>)
            
        screen.debug()
    })
})