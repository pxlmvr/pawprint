import { fireEvent, render } from '@testing-library/react'

import { Select } from '.'

describe('<Select />', () => {
  test('renders correctly', () => {
    const { queryByRole, queryByLabelText } = render(
      <Select name="aselect" label="A label" options={[]} onChange={() => {}} />
    )

    expect(queryByRole('combobox')).not.toBeNull()
    expect(queryByLabelText('A label')).not.toBeNull()
  })
  test('renders a list of options', () => {
    const opts = [
      { label: 'Foo', value: 'foo' },
      { label: 'Baz', value: 'baz' },
    ]

    const { queryAllByRole } = render(
      <Select
        name="aselect"
        label="A label"
        options={opts}
        onChange={() => {}}
      />
    )

    expect(queryAllByRole('option')).not.toBeNull()
  })
  test('option has correct label and value', () => {
    const { queryByRole, queryByText } = render(
      <Select
        name="aselect"
        label="A label"
        options={[{ label: 'Foo', value: 'foo' }]}
        onChange={() => {}}
      />
    )

    expect(queryByRole('option')).toHaveProperty('value', 'foo')
    expect(queryByText('Foo')).not.toBeNull()
  })
  test('calls onChange handler upon change', () => {
    const onChangeMock = jest.fn()

    const { getByRole } = render(
      <Select
        name="aselect"
        label="A label"
        options={[{ label: 'Foo', value: 'foo' }]}
        onChange={onChangeMock}
      />
    )

    expect(onChangeMock).toHaveBeenCalledTimes(0)

    fireEvent.change(getByRole('combobox'), { target: { value: 'foo' } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
    expect(onChangeMock).toHaveBeenCalledWith('foo')
  })
})
