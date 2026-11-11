import add from '../src/add.js'

describe('Add function - environment check', () => {
  test('adds two numbers correctly', () => {
    expect(add(6, 4)).toBe(10)
  })
})
