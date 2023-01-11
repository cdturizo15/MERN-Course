import { fireEvent, render } from "@testing-library/react"
import { Giftonic } from "../../src/components/Giftonic"
import { screen } from "@testing-library/react"

describe('test de <Giftonic/>', () => {

    const handleErase = jest.fn();

    test('debe invocar funcion borrado', () => {
        render(<Giftonic/>)
        const icon = screen.getByRole('icon')
        icon.addEventListener('click', ()=> handleErase)
        fireEvent.click(icon)
        expect(handleErase).toBeCalled()
        


    })
})