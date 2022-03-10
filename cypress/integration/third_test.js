/// <reference types="cypress-xpath" />


it('zoznam test', () => {
    
    cy.visit('https://gmail.com')
    cy.get('#identifierId').type('nvhoeiu')
    //cy.get('.icon-email-circle').click()
    //cy.get('#usernameField').clear().type('testeurowag@zoznam.sk')
    //cy.get('#passwordField').type('Tester2022')
    //cy.get(':nth-child(9) > .col-sm-9 > .size-md').click()
    //cy.get('#top_logout')
})