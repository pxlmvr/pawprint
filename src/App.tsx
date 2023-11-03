import { useEffect, useState } from 'react'
import { fetchBreedList, fetchList, fetchRandom } from './clients/dogceo'
import { ErrorMessage } from '@components/ErrorMessage'
import { Results } from '@containers/Results'
import { Container } from '@components/Container'
import { Select, SelectOption } from '@components/Select'
import { mapToLabelValue } from '@utils/mapToLabelValue'
import { Button } from '@components/Button'
import { BackToTop } from './components/BackToTop'
import { Shuffle } from './icons/Shuffle'
import { List } from './icons/List'

export type BreedData = Record<string, string[]>

const anyOption: SelectOption = { label: 'Any', value: '' }
const scrollTreshold = 300

function App() {
  const [breeds, setBreeds] = useState<BreedData>({})
  const [showBttButton, setShowBttButton] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<string[]>([])
  const [error, setError] = useState<string>('')

  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('')

  const breedList: string[] = Object.keys(breeds)
  const subBreedList = selectedBreed ? breeds[selectedBreed] : []

  const getRandom = async () => {
    setLoading(true)
    try {
      const { message, status } = await fetchRandom(
        selectedBreed,
        selectedSubBreed
      )
      if (status === 'success') {
        setResults([message])
      } else {
        setError(message)
      }
    } catch (error) {
      console.error(error)
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const getList = async () => {
    setLoading(true)
    try {
      const { message, status } = await fetchList(
        selectedBreed,
        selectedSubBreed
      )

      if (status === 'success') {
        setResults(message as string[])
      } else {
        setError(message as string)
      }
    } catch (error) {
      console.error(error)
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const { message } = await fetchBreedList()

        localStorage.setItem('dogBreeds', JSON.stringify(message))
        setBreeds(message)
      } catch (e) {
        console.error(e)
        setError('Could not fetch breed list at the moment.')
      }
    }

    const localBreedList: string | null = localStorage.getItem('dogBreeds')
    if (localBreedList) {
      setBreeds(JSON.parse(localBreedList))
    } else {
      fetchBreeds()
    }
  }, [])

  useEffect(() => {
    setSelectedSubBreed('')
  }, [selectedBreed])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition: number = window.scrollY

      setShowBttButton(scrollPosition > scrollTreshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <section id="controls">
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
                options={[
                  anyOption,
                  ...subBreedList.map((sb) => mapToLabelValue(sb)),
                ]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedSubBreed(e.target.value)
                }
              />
            )}
            <div id="submit-buttons">
              <Button
                disabled={!selectedBreed}
                className="mt-l"
                onClick={getRandom}
                testId="fetch-random-button"
              >
                <Shuffle />
                Fetch random image
              </Button>
              <Button
                disabled={!selectedBreed}
                className="mt-s"
                onClick={getList}
                testId="fetch-list-button"
              >
                <List />
                Get all images!
              </Button>
            </div>
          </form>
        </Container>
      </section>
      {error && <ErrorMessage message={error} />}
      <Results loading={loading} images={results} />
      {showBttButton && <BackToTop />}
    </main>
  )
}

export default App
