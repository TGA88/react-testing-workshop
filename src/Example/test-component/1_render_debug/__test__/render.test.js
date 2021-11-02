import { render, screen } from '@testing-library/react'
import { FavoriteNumber } from '../favorite-number'

test('Can render FavoriteNumber Component', () => {

    render(<FavoriteNumber />)
    const input = screen.getByLabelText(/favorite number/i)

    expect(input).toHaveAttribute('type', 'number')


})