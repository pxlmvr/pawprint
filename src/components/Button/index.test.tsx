import { render } from '@testing-library/react'

import { Button } from '.'

jest.mock('./styles.module.css', () => ({
  ...jest.requireActual('./styles.module.css'),
  button: '',
}))

describe('<Button />', () => {
  test('renders correctly', () => {
    const { queryByRole } = render(<Button>Click me</Button>)

    expect(queryByRole('button')).not.toBeNull()
  })
})
