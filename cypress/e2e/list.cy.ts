describe('get a list of images', () => {
  beforeEach(() => {
    cy.visit('localhost:5173')
  })

  it('lists images by breed', () => {
    cy.get('select[name="breed"]').select('Corgi')
    cy.findByTestId('fetch-list-button').click()

    cy.get('figure').should('have.length.above', 1)
  })

  it('lists images by breed and sub breed', () => {
    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-list-button').click()

    cy.get('figure').should('have.length.above', 1)
  })

  it('does not break when changing breed', () => {
    cy.get('select[name="breed"]').select('Australian')
    cy.get('select[name="subBreed"]').select('Shepherd')

    cy.findByTestId('fetch-list-button').click()

    cy.get('select[name="breed"]').select('Corgi')

    cy.findByTestId('fetch-list-button').click()

    cy.get('select[name="subBreed"]').should('have.value', '')
    cy.get('figure').should('have.length.above', 1)
  })
})
