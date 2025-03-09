# API GraphQL - Provincias

## Descrição

Esta API GraphQL fornece informações sobre as províncias, incluindo ID, nome, área, data de fundação, capital, prefixo telefônico, site do governo provincial e uma lista de municípios.

## Esquema GraphQL

```graphql
type Provincias {
  id: ID!
  nome: String!
  area: String!
  fundada: String!
  capital: String!
  prefixo_telefonico: String!
  site_governo_provincial: String!
  municipios: [String!]!
}

input InputNomeProvincia {
  provincia: String!
}

type Query {
  provincias: [Provincias!]!
  provincia(data: InputNomeProvincia!): Provincias!
}
```

## Como Executar o Projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute o servidor em modo desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse a API GraphQL no navegador:
   ```
   http://localhost:4000/graphql
   ```

## Tecnologias Utilizadas

- Node.js
- Express
- Apollo Server Express
- GraphQL
- Prisma ORM

## Autor

Projeto desenvolvido por Kaike Bartolomeu.
