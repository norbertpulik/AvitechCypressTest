import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I go to the Zoznam page', () => {
    cy.visit('https://zoznam.sk');
});

When('I log in to the mail',() => {
    cy.get('.icon-email-circle').click()
    cy.get('#usernameField').clear().type(Cypress.env("user_name"))
    cy.get('#passwordField').type(Cypress.env("user_password"))
    cy.get(':nth-child(9) > .col-sm-9 > .size-md').click()
});

Then('I am logged in', () => {
    cy.url().should('include', 'zmail.zoznam.sk')
})