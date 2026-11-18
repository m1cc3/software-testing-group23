import { jest } from '@jest/globals'
import every from '../src/every.js'

describe('every function', () => {
  test('returns true when all elements pass', () => {
    expect(every([2, 4, 6], number => number > 0))
      .toBe(true)
  })

  test('returns false when one element fails', () => {
    expect(every([2, -1, 6], number => number > 0))
      .toBe(false)
  })

  test('returns false when the first element fails', () => {
    expect(every([-1, 2, 3], number => number > 0))
      .toBe(false)
  })

  test('returns true for an empty array', () => {
    expect(every([], number => number > 0))
      .toBe(true)
  })

  test('returns true for null input', () => {
    expect(every(null, number => number > 0))
      .toBe(true)
  })

  test('handles an array with one element', () => {
    expect(every([5], number => number > 0))
      .toBe(true)
  })

  test('passes the correct index to predicate', () => {
    expect(every([10, 20, 30], (value, index) => {
      return value === (index + 1) * 10
    })).toBe(true)
  })

  test('stops checking after the first false result', () => {
    const predicate = jest.fn(number => number > 0)

    expect(every([2, -1, 6], predicate)).toBe(false)
    expect(predicate).toHaveBeenCalledTimes(2)
  })
})
