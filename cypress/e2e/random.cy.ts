import { breedList } from '../fixtures/breedList'
import { randobMyBreedAndSubBreed, randomByBreed } from '../fixtures/random'

describe('get a random image', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')

    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breeds/list/all',
      },
      breedList
    ).as('fetchBreeds')

    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/images/random',
      },
      randomByBreed
    ).as('fetchRandomByBreed')

    cy.intercept(
      {
        method: 'GET',
        url: '**/api/breed/*/*/images/random',
      },
      randobMyBreedAndSubBreed
    ).as('fetchRandomByBreedAndSubBreed')
  })

  it('gets a random image by breed', () => {
    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-random-button').click()

    cy.get('figure').should('not.be.null')
  })

  it('gets a random image by breed and sub breed', () => {
    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-random-button').click()

    cy.get('figure').should('not.be.null')
  })

  it('does not break when changing breed', () => {
    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-random-button').click()

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-random-button').click()

    cy.get('select[name="subBreed"]').should('have.value', '')
    cy.get('figure').should('not.be.null')
  })
})
