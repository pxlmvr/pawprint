import { Form } from '@containers/Form'
import { useEffect, useState } from 'react'
import { fetchBreedList } from './clients/dogceo'

export type BreedData = Record<string, string[]>

function App() {
  const [breeds, setBreeds] = useState<BreedData>({})

  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>('')

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const { message } = await fetchBreedList()
        setBreeds(message)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBreeds()
  }, [])

  const breedList: string[] = Object.keys(breeds)
  const subBreedList = selectedBreed ? breeds[selectedBreed] : []

  return (
    <main>
      <Form
        breeds={breedList}
        subBreeds={subBreedList}
        onBreedChange={setSelectedBreed}
        onSubBreedChange={setSelectedSubBreed}
      />
    </main>
  )
}

export default App
