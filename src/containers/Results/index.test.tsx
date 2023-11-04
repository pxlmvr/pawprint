import { render } from '@testing-library/react'
import { Results } from '.'

describe('<Results />', () => {
  test('renders loading spinner when results are being fetched', () => {
    const { queryByTestId } = render(
      <Results breed="someBreed" images={[]} loading={true} />
    )

    expect(queryByTestId('spinner')).not.toBeNull()
  })
  test('renders results once they are fetched', () => {
    const { queryByTestId } = render(
      <Results
        breed="someBreed"
        images={['example', 'example']}
        loading={false}
      />
    )

    expect(queryByTestId('results')).not.toBeNull()
  })
})
