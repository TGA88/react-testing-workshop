import React from 'react'
import { render } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from '@app/store'

import Index from '../../src/pages/index'


test('renders index', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Index />
    </Provider>)
  const linkElement = getByText(
    /Redux Toolkit/
  )
  expect(linkElement).toBeInTheDocument()
})
