const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Best', 'Thomas')
  expect(winner).toBe('Best')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Best', 'Thomas'],
    ['Best', 'Thomas']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Best',
    'Thomas'
  )
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Best',
    'Thomas'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
