import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_customer_create', () => {
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

// Cenário para teste para lista todos os clientes cadastrados
Cypress.Commands.add('api_customer_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/customer`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um cliente por ID com sucesso
Cypress.Commands.add('api_customer_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/customer/20ffdc4d-645b-44c4-a618-f270dec1f963`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para teste para edição dos dados de um cliente > PUT com sucesso
Cypress.Commands.add('api_customer_editById', () => {
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

// Cenário para deletar um cliente por ID com sucesso
Cypress.Commands.add('api_customer_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/customer/b85bbe84-5d87-472f-9441-39fdce92de23`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenários alterantivos

// Teste para cadastrar um cliente com email já existente
Cypress.Commands.add('api_customer_emailExisting', () => {
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
      email: 'luis-drumond99@oralcamp.com.br',
      phone: faker.phone.number('+55 ## 9####-####'),
      tokenAuthentication: faker.datatype.uuid(),
      checkAcessibility: true,
      checkEmail: true,
      checkPhone: true
    }
  });
});

// Teste para cadastrar um cliente com token já cadastrado
Cypress.Commands.add('api_customer_tokenExisting', () => {
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
      tokenAuthentication: 'be0237cf-1652-451f-9c32-f5da127ad4a3',
      checkAcessibility: true,
      checkEmail: true,
      checkPhone: true
    }
  });
});

// Teste para tentar cadastrar com um ou todos campos sem preencher
Cypress.Commands.add('api_customer_emptyFields', () => {
  cy.api({
    method: 'POST',
    url: `safer/customer`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      tokenAuthentication: '',
      checkAcessibility: true,
      checkEmail: true,
      checkPhone: true,
    }
  });
});

// Teste para excluir um cliente com ID inexistente
Cypress.Commands.add('api_customer_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/customer/6623b04f-f404-4110-8d1a-73816d0aa6ce`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

