import { BackToTop } from './components/BackToTop'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { ErrorMessage } from '@components/ErrorMessage'
import { fetchBreedList, fetchList, fetchRandom } from './clients/dogceo'
import { List } from './icons/List'
import { mapToLabelValue } from '@utils/mapToLabelValue'
import { Results } from '@containers/Results'
import { Select, SelectOption } from '@components/Select'
import { Shuffle } from './icons/Shuffle'
import { useEffect, useState } from 'react'

export type BreedData = Record<string, string[]>

const anyOption: SelectOption = { label: 'Any', value: '' }
const scrollTreshold = 380

function App() {
  const genericError = 'Something went wrong. Please try again.'

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
      setError(genericError)
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
      setError(genericError)
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
              label="Select a breed"
              name="breed"
              placeholder="Select a breed"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelectedBreed(e.target.value)
              }
            />
            {subBreedList.length > 0 && (
              <Select
                className="mt-s"
                label="Select a sub breed"
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
      <Results breed={selectedBreed} loading={loading} images={results} />
      {showBttButton && <BackToTop />}
    </main>
  )
}

export default App
