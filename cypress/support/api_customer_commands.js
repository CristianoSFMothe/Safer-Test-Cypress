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
            phone: faker.phone.number('+55 ## 9###-###-###'),
            tokenAuthentication: faker.datatype.uuid(),
            checkAcessibility: true,
            checkEmail: true,
            checkPhone: true,
            createOn: faker.date.betweens(),
            modifiedOn: faker.date.betweens()
        }
    });
});