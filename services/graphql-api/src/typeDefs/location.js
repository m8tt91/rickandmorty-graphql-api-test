import { gql } from 'apollo-server-lambda';

export const locationTypeDef = gql`
  """
  Defines Character type for API
  """
  type Location {
    "Unique identifier"
    id: ID
    "Name"
    name: String
    "Type"
    type: String
    "Dimension"
    dimension: String
  }

  extend type Query {
    "Returns a list of all locations"
    locations(page: Int, limit: Int): [Location]
  }

  extend type Query {
    "Returns a location"
    location(id: ID!): Location
  }
`;
