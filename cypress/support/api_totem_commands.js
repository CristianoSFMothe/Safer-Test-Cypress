import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_totem_create', () => {
  cy.api({
    method: 'POST',
    url: `safer/totem`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      totemId: faker.datatype.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      statusTotenPinPad: faker.datatype.boolean(),
      statusTotenPrinter: faker.datatype.boolean()
    }
  });
});

// Cenário para teste para lista todos os totem cadastrados
Cypress.Commands.add('api_totem_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/totem`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um totem por ID com sucesso
Cypress.Commands.add('api_totem_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/totem/c0963799-3966-4be6-b527-7d95c2ca5020`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenário para teste para edição dos dados de um totem > PUT com sucesso
Cypress.Commands.add('api_totem_editById', () => {
  cy.api({
    method: 'PUT',
    url: `safer/totem/d8d41429-815b-442d-85a1-0df63739cdb1`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      totemId: faker.datatype.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      statusTotenPinPad: true,
      statusTotenPrinter: true
    }
  });
});



// Cenário para deletar um totem por ID com sucesso
Cypress.Commands.add('api_totem_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/totem/d8d41429-815b-442d-85a1-0df63739cdb1`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});
;

// Cenários alterantivos

// Teste para cadastrar um totem com email já existente


// Teste para cadastrar um totem com token já cadastrado


// Teste para tentar cadastrar com um ou todos campos sem preencher


// Teste para excluir um totem com ID inexistente
Cypress.Commands.add('api_totem_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/totem/d8d41429-815b-442d-85a1-0df63739cdb2`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

