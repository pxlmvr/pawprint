import { useEffect, useState } from 'react'
import { fetchBreedList, fetchList, fetchRandom } from './clients/dogceo'
import { ErrorMessage } from '@components/ErrorMessage'
import { Results } from '@containers/Results'
import { Container } from '@components/Container'
import { Select } from '@components/Select'
import { mapToLabelValue } from '@utils/mapToLabelValue'
import { Button } from '@components/Button'

export type BreedData = Record<string, string[]>

function App() {
  const [breeds, setBreeds] = useState<BreedData>({})

  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('')

  const breedList: string[] = Object.keys(breeds)
  const subBreedList = selectedBreed ? breeds[selectedBreed] : []

  const getRandom = async () => {
    setLoading(true)
    try {
      const { message } = await fetchRandom(selectedBreed, selectedSubBreed)
      setResults([message])
    } catch (error) {
      console.error(error)
      setError(true)
    }
    setLoading(false)
  }

  const getList = async () => {
    setLoading(true)
    try {
      const { message } = await fetchList(selectedBreed, selectedSubBreed)
      setResults(message)
    } catch (error) {
      console.error(error)
      setError(true)
    }
    setLoading(false)
  }

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

  return (
    <main>
      <header>
        <Container>
          <form>
            <Select
              options={breedList.map((breed) => mapToLabelValue(breed))}
              label="Breed"
              name="breed"
              placeholder="Select a breed"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedBreed(e.target.value)
              }
            />
            {subBreedList.length > 0 && (
              <Select
                className="mt-s"
                label="Sub breed"
                name="subBreed"
                placeholder="Select a sub breed"
                options={subBreedList.map((sb) => mapToLabelValue(sb))}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedSubBreed(e.target.value)
                }
              />
            )}

            <Button
              disabled={!selectedBreed}
              className="mt-l"
              onClick={getRandom}
            >
              Random
            </Button>
            <Button
              disabled={!selectedBreed}
              className="mt-s"
              onClick={getList}
            >
              List
            </Button>
          </form>
        </Container>
      </header>
      {error && <ErrorMessage />}
      <Results loading={loading} images={results} />
    </main>
  )
}

export default App
