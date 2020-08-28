# QArentena - Percy + Cypress

## Objetivo: 

Este projeto foi criado para demostrar a utilização dos frameworks Cypress + Percy para testes de regressão visual.

## Pré-requisitos:

 - Ter o node instalado (Usamos o npm para instalar os pacotes)
 - Exportar a variável de ambiente `PERCY_TOKEN` com o token do seu projeto no percy ([Conforme o tutorial](https://docs.percy.io/docs/cypress))

## Instalação

Na pasta raiz do projeto, instale as dependências usando o comando: 
`npm install`

Para rodar os testes, execute o comando: 
`npx percy exec -- cypress run`

Após os testes serem executados, os resultados das comparações dos snapshots podem ser vistos na página do seu projeto no percy.
