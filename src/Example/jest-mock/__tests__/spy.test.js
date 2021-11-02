const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Best', 'Thomas')
  expect(winner).toBe('Best')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Best', 'Thomas'],
    ['Best', 'Thomas']
  ])

  // cleanup
  utils.getWinner.mockRestore()
})
