/// <reference types="cypress-xpath" />


it('zoznam test', () => {
    
    cy.visit('https://zoznam.sk')
    //cy.get('.accept > .button_text',{ timeout: 10000 }).should('be.visible').click()
    cy.get('.icon-email-circle').click()
    cy.get('#usernameField').clear().type(Cypress.env("user_name"))
    cy.get('#passwordField').type(Cypress.env("user_password"))
    cy.get(':nth-child(9) > .col-sm-9 > .size-md').click()
    cy.url().should('include', 'zmail.zoznam.sk')
})