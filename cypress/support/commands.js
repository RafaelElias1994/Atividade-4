import { faker } from '@faker-js/faker';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('deletarUser', function (id) {
    cy.request('DELETE', 'users/' + id)
});

Cypress.Commands.add('criarUser', function () {
    var name;
    var email;
    let password = '1234567';
    return cy.request({
        method: 'POST',
        url: ('https://raromdb-3c39614e42d4.herokuapp.com/api/users'),
        body: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: password,
        },
        failOnStatusCode: false,
      }).then(function(response) {
        return response.body;

      });
});