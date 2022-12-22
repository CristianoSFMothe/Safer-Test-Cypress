import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_fleet_create', () => {
  cy.api({
    method: 'POST',
    url: 'safer/fleet',
    failOnStatusCode: false,
    body: {
      name: {
        PT: 'Teste 1',
        EN: 'Test 1'
      },
      code: 'Teste',
      abbreviation: 'TS'
    }
  })
});

// Cenário para teste para lista todos os frotas cadastrados
Cypress.Commands.add('api_fleet_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/fleet`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um frota por ID com sucesso
Cypress.Commands.add('api_fleet_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/fleet/b6ad8c7f-f233-4a65-b852-7334208419c3`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenário para teste para edição dos dados de um frota > PUT com sucesso
Cypress.Commands.add('api_fleet_editById', () => {
  cy.api({
    method: 'PUT',
    url: `safer/fleet/16693718-f84d-4ed4-80d4-57c199a4be83`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      name: {
        PT: 'Teste Novo',
        EN: 'Test New'
      },
      code: 'Teste',
      abbreviation: 'TS'
    }
  });
});



// Cenário para deletar um frota por ID com sucesso
Cypress.Commands.add('api_fleet_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/fleet/16693718-f84d-4ed4-80d4-57c199a4be83`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenários alterantivos


// Teste para tentar cadastrar com um ou todos campos sem preencher
Cypress.Commands.add('api_fleet_emptyFields', () => {
  cy.api({
    method: 'POST',
    url: `safer/fleet`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      name: {
        PT: '',
        EN: ''
      },
      code: '',
      abbreviation: '',
    }
  });
});


// Teste para excluir um totem com ID inexistente
Cypress.Commands.add('api_fleet_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/fleet/16693718-f84d-4ed4-80d4-57c199a4be83`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

