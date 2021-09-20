/// <reference types="cypress" />


describe("Cypress Demo", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        
  })
  describe("My App", () => {
    it("We have Coreect title", () => {
        cy.contains('Edit src/App.tsx and save to reload.')
        cy.contains('Learn React').click()
    })
  })
})