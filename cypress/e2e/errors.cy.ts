import { breedList } from '../fixtures/breedList'
import { errorResponse } from '../fixtures/random'

describe('Cannot fetch breed list', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  })

  it('displays error message when api call results in 500', () => {
    cy.intercept('GET', '**/api/breeds/list/all', { statusCode: 500 }).as(
      'fetchBreedList'
    )

    cy.findAllByText('Could not fetch breed list at the moment.').should(
      'not.be.null'
    )
  })
})

describe('Cannot fetch random image', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')

    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breeds/list/all',
      },
      breedList
    ).as('fetchBreeds')
  })

  it('fetch random by breed displays generic error message when api call results in 500', () => {
    cy.intercept('GET', '**/api/breed/*/images/random', { statusCode: 500 }).as(
      'fetchRandomImageByBreed'
    )

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-random-button').click()

    cy.findAllByText('Something went wrong. Please try again.').should(
      'be.visible'
    )
  })

  it('fetch random by breed and sub breed displays generic error message when api call results in 500', () => {
    cy.intercept('GET', '**/api/breed/*/*/images/random', {
      statusCode: 500,
    }).as('fetchRandomImageByBreedAndSubBreed')

    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-random-button').click()

    cy.findAllByText('Something went wrong. Please try again.').should(
      'be.visible'
    )
  })

  it('fetch random by breed displays error message returned by api when response status property is "error"', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/images/random',
      },
      errorResponse
    ).as('fetchRandomImageByBreed')

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-random-button').click()

    cy.findAllByText(errorResponse.message).should('be.visible')
  })

  it('fetch random by breed and sub breed displays error message returned by api when response status property is "error"', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/*/images/random',
      },
      errorResponse
    ).as('fetchRandomImageByBreedAndSubBreed')

    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-random-button').click()

    cy.findAllByText(errorResponse.message).should('be.visible')
  })
})

describe('Cannot fetch image list', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')

    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breeds/list/all',
      },
      breedList
    ).as('fetchBreeds')
  })

  it('fetch list by breed displays generic error message when api call results in 500', () => {
    cy.intercept('GET', '**/api/breed/*/images', { statusCode: 500 }).as(
      'fetchListByBreed'
    )

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-list-button').click()

    cy.findByText('Something went wrong. Please try again.').should(
      'be.visible'
    )
  })

  it('fetch list by breed and sub breed displays generic error message when api call results in 500', () => {
    cy.intercept('GET', '**/api/breed/*/*/images', { statusCode: 500 }).as(
      'fetchListByBreedAndSubBreed'
    )

    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-list-button').click()

    cy.findByText('Something went wrong. Please try again.').should(
      'be.visible'
    )
  })

  it('fetch list by breed displays error message returned by api when response status property is "error"', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/images',
      },
      errorResponse
    ).as('fetchListByBreed')

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-list-button').click()

    cy.findByText(errorResponse.message).should('be.visible')
  })

  it.only('fetch list by breed and sub breed displays error message returned by api when response status property is "error"', () => {
    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/*/images',
      },
      errorResponse
    ).as('fetchListByBreedAndSubBreed')

    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-list-button').click()

    cy.findByText(errorResponse.message).should('be.visible')
  })
})
