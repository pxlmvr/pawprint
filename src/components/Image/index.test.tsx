import { render } from '@testing-library/react'
import { Image } from '.'

describe('<Image />', () => {
  test('it renders correctly', () => {
    const { queryByRole } = render(<Image breed="pupperino" url="someurl" />)

    expect(queryByRole('figure')).not.toBeNull()
    expect(queryByRole('img')).toHaveProperty('src', 'http://localhost/someurl')
    expect(queryByRole('img')).toHaveProperty('alt', 'A cute pupperino')
  })
})
