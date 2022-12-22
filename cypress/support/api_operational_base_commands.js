import {faker} from '@faker-js/faker'

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_operational_base_create', () => {
    cy.api({
        method: 'POST',
        url: `safer/operational-base`,
        headers: {
            'content-type': 'application/json; charset=utf-8'
        },
        failOnStatusCode: false,
        body: {
          iataCode: 'GIG',
          name: {
            PT: 'Teste',
            EN: 'Test'
          },
          address: 'Avenida Vinte de Janeiro, s/n - Ilha do Governador',
          addressNumber: 0,
          addressZipCode: 21941900,
          type: 'AIRPORT',
          point: {
            lat: 22.8089,
            lng: -43.2436
          },
          stopPointType: 'FISCAL',
          qrCode: 'string',
          ratioArea: 189574,
          maximumWaiting: 22971,
          minimumWaiting: 971,
          enableAlert: true,
          cityId: '42e1d37a-d3bd-4c61-9761-2467505fe209'
        }
    });
});

// Cenário para teste para lista todos os base operacional cadastrados
Cypress.Commands.add('api_operational_base_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/operational-base`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um base operacional por ID com sucesso
Cypress.Commands.add('api_operational_base_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/operational-base/b1ddf50f-66fc-419f-ab7b-51e9a94362d9`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para teste para edição dos dados de um base operacional > PUT com sucesso
Cypress.Commands.add('api_operational_base_editById', () => {
  cy.api({
    method: 'PUT',
    url: `safer/operational-base/b11cd3d4-218a-422f-98cb-2093b4dd3d60`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      iataCode: 'SDU',
      name: {
        PT: 'Aeroporto Santos Dumont',
        EN: 'Santos Dumont Airport'
      },
      address: 'Praça Sen. Salgado Filho, s/n - Centro, Rio de Janeiro',
      addressNumber: 0,
      addressZipCode: 20021340,
      type: 'AIRPORT',
      point: {
        lat: -229103,
        lng: -431631
      },
      stopPointType: 'FISCAL',
      qrCode: '8c361c96-e446-457d-b077-700015ef60ca',
      ratioArea: 189574,
      maximumWaiting: 8520000,
      minimumWaiting: 20000,
      enableAlert: true,
      cityId: '42e1d37a-d3bd-4c61-9761-2467505fe209'
    }

  });
});

// Cenário para deletar um base operacional por ID com sucesso
Cypress.Commands.add('api_operational_base_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/operational-base/8fdb91f1-e015-4dfe-a7bf-b1678b92916e`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenários alterantivos


// Teste para tentar cadastrar com um ou todos campos sem preencher
Cypress.Commands.add('api_operational_base_emptyFields', () => {
  cy.api({
    method: 'POST',
    url: `safer/operational-base`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      iataCode: '',
      name: {
        PT: '',
        EN: ''
      },
      address: '',
      addressNumber: '',
      addressZipCode: '',
      type: '',
      point: {
        lat: '',
        lng: ''
      },
      stopPointType: '',
      qrCode: '',
      ratioArea: '',
      maximumWaiting: '',
      minimumWaiting: '',
      enableAlert: '',
      cityId: ''
    }
  });
});

// Teste para excluir um base operacional com ID inexistente
Cypress.Commands.add('api_operational_base_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/operational-base/8fdb91f1-e015-4dfe-a7bf-b1678b92916e`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});
