import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react';
import {ProfileStatusWithHooks, PropsType} from "./ProfileStatusWithHooks";


describe("ProfileStatusWithHooks component", () => {
    test('status from props should be change span', () => {
        render(<ProfileStatusWithHooks status={"IT-Camasutra"} updateStatus={()=>{}}/>)
        expect(screen.getByTestId('status')).toHaveTextContent('IT-Camasutra')
    })

    test('Input no to be find', () => {
        render(<ProfileStatusWithHooks status={"IT-Camasutra"} updateStatus={()=>{}}/>)
        expect(()=> {
            screen.getByTestId('status-input')
        }).toThrow()
    })

    test('After creation span should contains correct status', () => {
        render(<ProfileStatusWithHooks status={'IT-Camasutra'} updateStatus={()=>{}}/>)
        fireEvent.dblClick(screen.getByTestId('status'))
        expect(screen.getByTestId('status-input')).toHaveValue('IT-Camasutra')
    })

    test('callback should be called', () => {
        const callback = jest.fn()
        render(<ProfileStatusWithHooks status={'IT-Camasutra'} updateStatus={callback}/>)
        expect(callback.mock.calls.length).toBe(0)
        // expect(screen.getByTestId('status-input')).toHaveValue('IT-Camasutra')
    })
})