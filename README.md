# Safer-Test-Cypress

> Testes de aceitação do Safer Backoffice relizados com o Cypress


# Pre-requisitos

* NodeJs `v18.12.1`
* NPM `8.18.2`


# Setup do projeto de testes com Cypress

## inicializando o Node

No terminal digitar o comando

````bash
npm init
````

> Nas perguntas que irão inicializar com esse comando, alterar nesse casso o  `test comamand:` colocando nele `npx cypress run`
> E também o `license:` colocando `MIT`
> Os demais pode ser opcionais

## Instalando o Cypress e outras libs

No terminal de linha de comando,  execute o comando

```bash
npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D
```

Para gerar uma massa de teste com dados regionais do Brasil, necessário instalar a depedência do `faker br`

```bash
npm i faker-br
````

> A lib `faker` será utilizada para a criação de dados aleatórios para os testes
> E a lib `cypress-plugin-api` será utilizada para prover feedback visual durante os testes de API.

# Incializando o Cypress

No terminal executar o comando

```bash
npx cypress open
```

> este comando irá abrir a Cypress App, a qual vai te guiar na criação do projeto de testes end-to-end (E2E)

1. Clique no botão para a criação de um projeto de testes end-to-end (E2E Testing);


2. Aceite os arquivos de configuração clicando no botão Continue

3. Selecione o navegador Electron e clique no botão `Start E2E Testing in Electron`;

4. Crie um primeiro arquivo de teste clicando na opção `Create new emtpy spec`;

5. Nomeie o arquivo como `create-partner.cy.js`;

7. Clique no botão `Create spec` e então, confirme clicando no botão `Ok, run the spec`
   Após a execução do arquivo recém criado, feche o navegador `Electron`.

# Configurando o projeto de testes automatizados

1. Feche a `Cypress App`

2. Abra o arquivo `cypress.config.js` criado na raiz do projeto e altere seu conteúdo pelo seguinte:

```bash
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/api',
  },
});
```

> Aqui está sendo configurando a URL base da aplicação em teste

