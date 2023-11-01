import { render } from '@testing-library/react'
import { Image } from '.'

describe('<Image />', () => {
  test('it renders correctly', () => {
    const { queryByRole } = render(<Image url="someurl" />)

    expect(queryByRole('figure')).not.toBeNull()
    expect(queryByRole('img')).toHaveProperty('src', 'http://localhost/someurl')
  })
})
