import { gql } from 'apollo-server-lambda';

export const characterTypeDef = gql`
  """
  Defines Character type for API
  """
  type Character {
    "Unique identifier"
    id: ID
    "Human readable name"
    name: String
  }

  extend type Query {
    "Returns a character"
    characters: [Character]
  }

  extend type Query {
    "Returns a list of all the characters"
    character(id: ID!): Character
  }
`;
