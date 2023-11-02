type ResponseStatus = 'success' | 'error'

export type FetchBreedListResponse = {
  message: Record<string, string[]>
  status: ResponseStatus
}

type RandomImageResponse = {
  message: string
  status: ResponseStatus
}

type ImageListResponse = {
  message: string[]
  status: ResponseStatus
}

type ErrorResponse = {
  status: ResponseStatus
  message: string
  code: number
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

export const fetchRandom = async (
  breed: string,
  subBreed?: string
): Promise<RandomImageResponse | ErrorResponse> => {
  const path = subBreed ? `${breed}/${subBreed}/` : `${breed}/`

  try {
    const response = await fetch(`${baseUrl}/breed/${path}images/random`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching random image:', error)
    throw error
  }
}

export const fetchList = async (
  breed: string,
  subBreed?: string
): Promise<ImageListResponse | ErrorResponse> => {
  const path = subBreed ? `${breed}/${subBreed}/` : `${breed}/`

  try {
    const response = await fetch(`${baseUrl}/breed/${path}images`)

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching image list:', error)
    throw error
  }
}
