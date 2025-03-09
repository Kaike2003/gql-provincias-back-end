# API GraphQL - Provincias

## Descrição

Esta API GraphQL fornece informações sobre as províncias, incluindo ID, nome, área, data de fundação, capital, prefixo telefônico, site do governo provincial e uma lista de municípios.

## Esquema GraphQL

```graphql
type Provincias {
  provincia: String!
  governador: Governador!
  vice_governadores: [Vice_governadores!]!
  municipios: [Municipios]!
  informacoes_adicionais: InformacoesAdicionais!
}

input InputNomeProvincia {
  provincia: String!
}

type Governador {
  nome: String!
  data_nomeacao: String!
}

type Vice_governadores {
  nome: String!
  cargo: String!
}

type InformacoesAdicionais {
  capital: String
  linguas: [String]
  densidade_populacional: String
  data_fundacao: String
  extensao: String
  etnia: [String]
  numero_municipios: String
}

type Municipios {
  nome: String!
  comunas: [String]
  distritos: [String]
  data_fundacao: String
  administrador: String
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
