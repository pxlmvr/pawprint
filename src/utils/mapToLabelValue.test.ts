import { mapToLabelValue } from './mapToLabelValue'

describe('mapToLabelValue()', () => {
  test('maps a value to its corresponding label', () => {
    expect(mapToLabelValue('foo')).toStrictEqual({ label: 'Foo', value: 'foo' })
  })
})
