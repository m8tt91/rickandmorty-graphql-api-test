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
    "Gender of character"
    gender: String
    "Living status"
    status: String
    "Species"
    species: String
    "Type"
    type: String
    "Location ID"
    locationId: ID
    "Origin ID"
    originId: ID
  }

  extend type Query {
    "Returns a list of all the characters"
    characters(page: Int, limit: Int): [Character]
  }

  extend type Query {
    "Returns a character"
    character(id: ID!): Character
  }
`;
