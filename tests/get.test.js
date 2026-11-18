import get from '../src/get.js'

describe('get function', () => {
  test('returns a simple property value', () => {
    expect(get({ name: 'Mikael' }, 'name'))
      .toBe('Mikael')
  })

  test('returns a nested property value', () => {
    const object = { user: { name: 'Mikael' } }
    expect(get(object, 'user.name'))
      .toBe('Mikael')
  })

  test('accepts an array as a property path', () => {
    const object = { user: { age: 25 } }
    expect(get(object, ['user', 'age']))
      .toBe(25)
  })

  test('returns a value from an array', () => {
    const object = { users: [{ name: 'Anna' }] }
    expect(get(object, 'users[0].name'))
      .toBe('Anna')
  })

  test('returns undefined for a missing property', () => {
    expect(get({ name: 'Mikael' }, 'age'))
      .toBeUndefined()
  })

  test('returns the default value for a missing property', () => {
    expect(get({ name: 'Mikael' }, 'age', 'unknown'))
      .toBe('unknown')
  })

  test('returns the default value for a null object', () => {
    expect(get(null, 'name', 'unknown'))
      .toBe('unknown')
  })

  test('returns null when the property value is null', () => {
    expect(get({ name: null }, 'name', 'unknown'))
      .toBeNull()
  })
})
