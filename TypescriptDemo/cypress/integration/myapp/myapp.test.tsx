/// <reference types="cypress" />

describe("Cypress Demo", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.screenshot()
  });

  describe("My App", () => {
    it("We have Coreect title", () => {
      cy.contains('Getting Started with React Using TypeScript')
      cy.contains('Getting Started with React Using TypeScript').should('exist')
      // cy.get('div')
      // cy.get('[ data-testid=create]').click()
      // cy.viewport(1280,720)
      // cy.viewport("iphone-5")
    //   cy.contains("Add User").click();
    //   cy.log("Add User clicked");
      // check url
    //   cy.url().should("include", "/");
    //   cy.url().then((url) =>{
    //        cy.log('url: ' + url)
    //     });
    

});
  });

    context("My App test", () => {
        it.only("Test All The Field", () => {
            
            
            cy.get('[data-testid=firstname]').type('Sharoz');
            
            cy.get('[data-testid=lastname]').type('Raees');
            
            cy.get('[data-testid=email]').type('sharozraees@gmail.com')
            
            cy.get('[data-testid=create-user-button]').click();
            
            cy.get('[data-testid=create]').click();
            
            cy.url().then((url) =>{
                cy.log('url: ' + url)
            });
            
        })
    })

});
