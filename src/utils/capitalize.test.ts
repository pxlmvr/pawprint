import { capitalize } from './capitalize'

describe('capitalize()', () => {
  test('it uppercases the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
  })
  test('it only uppercases the first letter of the first word in a sentence', () => {
    expect(capitalize('react is awesome')).toBe('React is awesome')
  })
  test('works with an empty string', () => {
    expect(capitalize('')).toBe('')
  })
})
