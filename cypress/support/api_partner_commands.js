import {faker} from '@faker-js/faker'

const fakerBr = require('faker-br');

faker.locale = 'pt_BR'

// Cenário de teste para cadastrar com sucesso
Cypress.Commands.add('api_partner_create', () => {
  cy.api({
    method: 'POST',
    url: `safer/partner`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      fantasyName: faker.internet.userName(),
      cnpjEin: fakerBr.br.cnpj(),
      name: faker.name.fullName(),
      address: "Rua Pit Stop, Jacarepaguá, Rio de Janeiro - RJ",
      addressNumber: 507,
      addressZipCode: 22775087,
      cityId: "42e1d37a-d3bd-4c61-9761-2467505fe209",
      phone: 21981028480
    }
  });
});

// Cenário para teste para lista todos os parceiro cadastrados
Cypress.Commands.add('api_partner_listAll', () => {
  cy.api({
    method: 'GET',
    url: `safer/partner`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenário para lista um parceiro por ID com sucesso
Cypress.Commands.add('api_partner_listById', () => {
  cy.api({
    method: 'GET',
    url: `safer/partner/572f76e9-38e4-4e01-bac3-33f47377c748`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});


// Cenário para teste para edição dos dados de um parceiro > PUT com sucesso
Cypress.Commands.add('api_partner_editById', () => {
  cy.api({
    method: 'PUT',
    url: `safer/partner/bf1f3d68-d48a-4bac-ad50-d4a6d1adea53`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      fantasyName: 'Rebeca',
      cnpjEin: '27.461.015/3776-30',
      name: 'Rebeca Santos Filho',
      address: "Jóquei Clube, São Gonçalo - RJ",
      addressNumber: 811,
      addressZipCode: 24745005,
      cityId: "42e1d37a-d3bd-4c61-9761-2467505fe209",
      phone: 21996336909
    }
  });
});


// Cenário para deletar um parceiro por ID com sucesso
Cypress.Commands.add('api_partner_deleteById', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/partner/d7309c0a-59e1-4ea9-bb6e-d11725508fd6`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});

// Cenários alterantivos

// Teste para cadastrar um parceiro com CNPJEin já existente
Cypress.Commands.add('api_partner_CNPJExisting', () => {
  cy.api({
    method: 'POST',
    url: `safer/partner`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      fantasyName: faker.name.lastName(),
      cnpjEin: '58538170328185',
      name: faker.name.fullName(),
      address: 'Rua Pit Stop, Jacarepaguá, Rio de Janeiro - RJ',
      addressNumber: 507,
      addressZipCode: 22775087,
      cityId: '42e1d37a-d3bd-4c61-9761-2467505fe209',
      phone: 21981028480
    }
  });
});


// Teste para tentar cadastrar com um ou todos campos sem preencher
Cypress.Commands.add('api_partner_emptyFields', () => {
  cy.api({
    method: 'POST',
    url: `safer/partner`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
    body: {
      fantasyName: '',
      cnpjEin: '',
      name: '',
      address: '',
      addressNumber: '',
      addressZipCode: '',
      cityId: '',
      phone: ''
    }
  });
});


// Teste para excluir um parceiro com ID inexistente
Cypress.Commands.add('api_partner_notFoundIdDelete', () => {
  cy.api({
    method: 'DELETE',
    url: `safer/partner/d7309c0a-59e1-4ea9-bb6e-d11725508fd6`,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    failOnStatusCode: false,
  });
});
