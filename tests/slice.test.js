import slice from '../src/slice.js'

describe('slice function', () => {
  test('returns the selected part of an array', () => {
    expect(slice([1, 2, 3, 4, 5], 1, 3))
      .toEqual([2, 3])
  })

  test('returns the whole array with default indexes', () => {
    expect(slice([1, 2, 3]))
      .toEqual([1, 2, 3])
  })

  test('handles a negative start index', () => {
    expect(slice([1, 2, 3, 4], -2))
      .toEqual([3, 4])
  })

  test('handles a negative end index', () => {
    expect(slice([1, 2, 3, 4], 0, -1))
      .toEqual([1, 2, 3])
  })

  test('returns an empty array for empty input', () => {
    expect(slice([], 0, 2))
      .toEqual([])
  })

  test('returns an empty array when start equals end', () => {
    expect(slice([1, 2, 3], 2, 2))
      .toEqual([])
  })

  test('returns an empty array when start is greater than end', () => {
    expect(slice([1, 2, 3], 3, 1))
      .toEqual([])
  })

  test('handles an end index larger than the array length', () => {
    expect(slice([1, 2, 3], 1, 10))
      .toEqual([2, 3])
  })
})
