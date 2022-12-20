import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

Cypress.Commands.add('api_createCustomer', () => {
    cy.api({
        method: 'POST',
        url: `safer/customer`,
        headers: {
            'content-type': 'application/json; charset=utf-8'
        },
        failOnStatusCode: false,
        body: {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.number('+55 ## 9####-####'),
            tokenAuthentication: faker.datatype.uuid(),
            checkAcessibility: true,
            checkEmail: true,
            checkPhone: true
        }
    });
});

Cypress.Commands.add('api_listAllCustomer', () => {
  cy.api({
    method: 'GET',
    url: `safer/customer`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('api_listByIdCustomer', () => {
  cy.api({
    method: 'GET',
    url: `safer/customer/20ffdc4d-645b-44c4-a618-f270dec1f963`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


Cypress.Commands.add('api_editFields', () => {
  cy.api({
    method: 'PUT',
    url: `safer/customer/f477ee5e-c9b5-41d3-9b33-a2fed7fdcb8e`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      firstName: 'Martin',
      lastName: 'Heitor Cardoso',
      email: 'martir_miquel@alemponte.com.br',
      phone: '+55 (21) 98936-1163',
      tokenAuthentication: 'ef45085d-9ef7-4974-8743-dbcf1c8d52c8',
      checkAcessibility: false,
      checkEmail: true,
      checkPhone: true,
    }
  });
});

Cypress.Commands.add('api_deleteByIdCustomer', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/customer/f477ee5e-c9b5-41d3-9b33-a2fed7fdcb8e`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

