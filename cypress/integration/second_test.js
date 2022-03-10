/// <reference types="cypress" />


it('yahoo test', () => {
    cy.on('uncaught:exception',(e, runnable)=> {
        console.log('error is', e)
        console.log('runnable', runnable)
        return false
    })
    
    cy.visit('https://yahoo.com')
    cy.get('.primary').click()
    cy.wait(3000)
    cy.get('#ybarMailLink').should('be.visible').click()
    cy.get('.signin').click()
    cy.wait(3000)
    cy.url().then(url => {
        const myUrl = url
        cy.log('Current URL is : '+myUrl)
        cy.visit(myUrl)
        cy.get('#login-username').type('revrebwrb',{force: true})
        cy.get('#login-signin').click()
      });
     
      //cy.get('#login-username').click().type('fqewfrfgg')
    //cy.get('[data-layer="Content"]').should('be.visible').type('eurowagtester')
    //cy.get('#login-signin').should('be.visible').click()
   // cy.get('.icon-email-circle').click()
    //cy.get('#usernameField').clear().type('testeurowag@zoznam.sk')
    //cy.get('#passwordField').type('Tester2022')
    //cy.get(':nth-child(9) > .col-sm-9 > .size-md').click()
   
})