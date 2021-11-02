const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test('returns winner', () => {
  const winner = thumbWar('Best', 'Thomas')
  expect(winner).toBe('Best')
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ['Best', 'Thomas'],
    ['Best', 'Thomas']
  ])

  // cleanup
  utilsMock.getWinner.mockReset()
})
