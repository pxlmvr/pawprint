export type FetchBreedListResponse = {
  message: Record<string, string[]>
  status: string
}

const baseUrl = 'https://dog.ceo/api'

export const fetchBreedList = async (): Promise<FetchBreedListResponse> => {
  try {
    const response = await fetch(`${baseUrl}/breeds/list/all`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching dog breeds:', error)
    throw error
  }
}

export const fetchRandom = async (breed: string, subBreed?: string) => {
  const path = subBreed ? `${breed}/${subBreed}/` : `${breed}/`

  const response = await fetch(`${baseUrl}/breed/${path}images/random`)

  const data = await response.json()
  return data
}

export const fetchList = async (breed: string, subBreed?: string) => {
  const path = subBreed ? `${breed}/${subBreed}/` : `${breed}/`

  const response = await fetch(`${baseUrl}/breed/${path}images`)

  const data = await response.json()
  return data
}
