import reduce from '../src/reduce.js'

describe('reduce function', () => {
  test('calculates the sum of numbers', () => {
    expect(reduce([1, 2, 3, 4], (sum, n) => sum + n, 0))
      .toBe(10)
  })

  test('calculates the product of numbers', () => {
    expect(reduce([2, 3, 4], (result, n) => result * n, 1))
      .toBe(24)
  })

  test('uses the provided initial value', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n, 10))
      .toBe(16)
  })

  test('uses the first element when no initial value is given', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum + n))
      .toBe(6)
  })

  test('returns the initial value for an empty array', () => {
    expect(reduce([], (sum, n) => sum + n, 10))
      .toBe(10)
  })

  test('returns the only element when no initial value is given', () => {
    expect(reduce([5], (sum, n) => sum + n))
      .toBe(5)
  })

  test('calculates the sum of object values', () => {
    const object = { a: 1, b: 2, c: 3 }

    expect(reduce(object, (sum, value) => sum + value, 0))
      .toBe(6)
  })

  test('uses object keys when reducing an object', () => {
    const object = { a: 1, b: 2 }

    const result = reduce(object, (acc, value, key) => {
      acc[key] = value * 2
      return acc
    }, {})

    expect(result).toEqual({ a: 2, b: 4 })
  })
})
