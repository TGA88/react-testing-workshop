import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HiddenMessage } from './hidden-message'

// jest.mock('react-transition-group', () => {
//     return {
//       CSSTransition: (props) => (props.in ? props.children : null),
//     }
//   })

test('shows hidden message when toggle is clicked', async () => {
    const myMessage = 'hello world'
    render(<HiddenMessage>{myMessage}</HiddenMessage>)
    const toggleButton = screen.getByText(/toggle/i)

    // to appeare
    expect(screen.queryByText(myMessage)).not.toBeInTheDocument()
    userEvent.click(toggleButton)
    expect(screen.getByText(myMessage)).toBeInTheDocument()

    //to disappeare
    userEvent.click(toggleButton)
    waitFor(()=> expect(screen.queryByText(myMessage)).not.toBeInTheDocument())

 
})
