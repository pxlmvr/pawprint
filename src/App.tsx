import { useEffect, useState } from 'react'
import { fetchBreedList } from './clients/dogceo'
import { ErrorMessage } from './components/ErrorMessage'
import { Results } from './containers/Results'
import { Container } from './components/Container'
import { Select } from './components/Select'
import { mapToLabelValue } from './utils/mapToLabelValue'
import { Button } from './components/Button'

export type BreedData = Record<string, string[]>

function App() {
  const [breeds, setBreeds] = useState<BreedData>({})

  const [results, setResults] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('')

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const { message } = await fetchBreedList()
        setBreeds(message)
      } catch (_e) {
        console.error(error)
        setError(true)
      }
    }

    fetchBreeds()
  }, [error])

  const breedList: string[] = Object.keys(breeds)
  const subBreedList = selectedBreed ? breeds[selectedBreed] : []

  return (
    <main>
      <Container>
        <form>
          <Select
            options={breedList.map((breed) => mapToLabelValue(breed))}
            label="Breed"
            name="breed"
            placeholder="Select a breed"
            onChange={() => {}}
          />
          {subBreedList.length > 0 && (
            <Select
              className="mt-s"
              label="Sub breed"
              name="subBreed"
              placeholder="Select a sub breed"
              options={subBreedList.map((sb) => mapToLabelValue(sb))}
              onChange={() => {}}
            />
          )}

          <Button className="mt-l" onClick={() => {}}>
            Random
          </Button>
          <Button className="mt-s" onClick={() => {}}>
            List
          </Button>
        </form>
      </Container>
      <Results images={results} />
      {error && <ErrorMessage />}
    </main>
  )
}

export default App
