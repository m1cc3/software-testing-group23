import chunk from '../src/chunk.js'

describe('chunk function', () => {
  test('splits an array into equally sized chunks', () => {
    expect(chunk([1, 2, 3, 4], 2))
      .toEqual([[1, 2], [3, 4]])
  })

  test('creates a smaller final chunk when needed', () => {
    expect(chunk([1, 2, 3, 4, 5], 2))
      .toEqual([[1, 2], [3, 4], [5]])
  })

  test('returns an empty array for an empty input array', () => {
    expect(chunk([], 2)).toEqual([])
  })

  test('uses size 1 by default', () => {
    expect(chunk([1, 2, 3]))
      .toEqual([[1], [2], [3]])
  })

  test('handles a chunk size larger than the array', () => {
    expect(chunk([1, 2], 5))
      .toEqual([[1, 2]])
  })

  test('returns an empty array when size is zero', () => {
    expect(chunk([1, 2, 3], 0))
      .toEqual([])
  })

  test('returns an empty array when size is negative', () => {
    expect(chunk([1, 2, 3], -2))
      .toEqual([])
  })

  test('returns an empty array for null input', () => {
    expect(chunk(null, 2))
      .toEqual([])
  })
})
