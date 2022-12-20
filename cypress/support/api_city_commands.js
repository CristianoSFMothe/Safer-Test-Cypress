import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_city_create', () => {
  cy.api({
    method: 'POST',
    url: `safer/city`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      name: {
        EN: 'Minas Gerais',
        PT: 'Minas Gerais'
      },
      countryCode: 'BR',
      stateCode: 'MG',
      codeTOM: '414520',
      stateName: {
        EN: 'Minas Gerais',
        PT: 'Minas Gerais'
      },
      prefixCitCodePhoneNumber: 31
    }
  });
});

// Cenário para teste para lista todos os cidades cadastrados
Cypress.Commands.add('api_city_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/city`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um cidade por ID com sucesso
Cypress.Commands.add('api_city_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/city/42e1d37a-d3bd-4c61-9761-2467505fe209`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenário para teste para edição dos dados de um totem > PUT com sucesso
Cypress.Commands.add('api_city_editById', () => {
  cy.api({
    method: 'PUT',
    url: `safer/city/42e1d37a-d3bd-4c61-9761-2467505fe209`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      name: {
        EN: 'Rio de Janeiro',
        PT: 'Rio de Janeiro'
      },
      countryCode: 'BR',
      stateCode: 'RJ',
      codeTOM: '3304557',
      stateName: {
        EN: 'Rio de Janeiro',
        PT: 'Rio de Janeiro'
      },
      prefixCitCodePhoneNumber: 21
    }
  });
});



// Cenário para deletar um totem por ID com sucesso
Cypress.Commands.add('api_city_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/city/7a154fe6-2dd0-456d-9edc-d4cffab7dd02`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenários alterantivos


// Teste para tentar cadastrar com um ou todos campos sem preencher
Cypress.Commands.add('api_city_emptyFields', () => {
  cy.api({
    method: 'POST',
    url: `safer/city`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      name: {
        EN: '',
        PT: ''
      },
      countryCode: '',
      stateCode: '',
      codeTOM: '',
      stateName: {
        EN: '',
        PT: ''
      },
      prefixCitCodePhoneNumber: ''
    }
  });
});


// Teste para excluir um totem com ID inexistente
Cypress.Commands.add('api_city_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/city/7a154fe6-2dd0-456d-9edc-d4cffab7dd02`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

