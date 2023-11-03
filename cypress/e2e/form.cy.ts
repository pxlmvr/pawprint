import { breedList } from '../fixtures/breedList'

describe('form', () => {
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

  it('buttons are disabled until the user selects a breed', () => {
    cy.findByTestId('fetch-random-button').should('be.disabled')
    cy.findByTestId('fetch-list-button').should('be.disabled')

    cy.get('select[name="breed"]').select('corgi')

    cy.findByTestId('fetch-random-button').should('not.be.disabled')
    cy.findByTestId('fetch-list-button').should('not.be.disabled')
  })

  it('sub breed select field only appears after breed has been selected', () => {
    cy.get('select').should('have.length', 1)

    cy.get('select[name="breed"]').select('corgi')

    cy.get('select').should('have.length', 2)
  })

  it('sub breed select only appears if the selected breed has sub breeds', () => {
    cy.get('select[name="breed"]').select('akita')

    cy.get('select').should('have.length', 1)
  })

  it('sub breed select should disappear when switching to a breed that does not have sub breeds', () => {
    cy.get('select[name="breed"]').select('corgi')

    cy.get('select').should('have.length', 2)
    cy.get('select[name="sub-breed"]').should('not.be.null')

    cy.get('select[name="breed"]').select('akita')

    cy.get('select').should('have.length', 1)
  })
})
