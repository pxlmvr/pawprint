import { render } from '@testing-library/react'
import { ErrorMessage } from '.'

describe('<ErrorMessage />', () => {
  test('renders correctly', () => {
    const { queryByRole, queryByText } = render(
      <ErrorMessage message="Something went wrong" />
    )

    expect(queryByRole('alert')).not.toBeNull()
    expect(queryByText('Something went wrong')).not.toBeNull()
  })
})
