export type FetchBreedListResponse = {
  message: Record<string, string[]>
  status: string
}

const baseUrl = 'https://dog.ceo/api'

export const fetchBreedList = async (): Promise<fetchBreedListResponse> => {
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

export const fetchRandomByBreed = async (breed: string) => {
  const response = await fetch(`${baseUrl}/breed/${breed}/images/random`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}

export const fetchListByBreed = async (breed: string) => {
  const response = await fetch(`${baseUrl}/breed/${breed}/images`)
  return response
}

export const fetchRandomByBreedAndSubBreed = async (
  breed: string,
  subBreed: string
) => {
  const response = await fetch(
    `${baseUrl}/breed/${breed}/${subBreed}/images/random`
  )
  return response
}

export const fetchListByBreedAndSubBreed = async (
  breed: string,
  subBreed: string
) => {
  const response = await fetch(`${baseUrl}/breed/${breed}/${subBreed}/images`)
  return response
}
