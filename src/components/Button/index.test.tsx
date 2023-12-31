import { fireEvent, render } from '@testing-library/react'

import { Button } from '.'

jest.mock('./styles.module.css', () => ({
  ...jest.requireActual('./styles.module.css'),
  button: '',
}))

describe('<Button />', () => {
  test('renders correctly', () => {
    const { queryByRole, getByText } = render(
      <Button onClick={() => {}}>Click me</Button>
    )

    expect(queryByRole('button')).not.toBeNull()
    expect(getByText('Click me')).not.toBeNull()
  })

  test('accepts disabled prop', () => {
    const { queryByRole } = render(
      <Button disabled onClick={() => {}}>
        Click me
      </Button>
    )

    expect(queryByRole('button')).toHaveProperty('disabled')
  })

  test('calls handler on click', () => {
    const onClickMock = jest.fn()

    const { getByRole } = render(
      <Button onClick={onClickMock}>Click me</Button>
    )

    expect(onClickMock).toHaveBeenCalledTimes(0)

    fireEvent.click(getByRole('button'))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('accepts testId prop and renders it', () => {
    const { queryByTestId } = render(
      <Button testId="abc" onClick={() => {}}>
        Click me
      </Button>
    )

    expect(queryByTestId('abc')).not.toBeNull()
  })
})
