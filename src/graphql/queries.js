/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($year: Int!, $title: String!) {
    getMovie(year: $year, title: $title) {
      year
      title
      organizationID
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      admin
      team
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $year: Int
    $title: ModelStringKeyConditionInput
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMovies(
      year: $year
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        year
        title
        organizationID
        admin
        team
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moviesByOrganizationID = /* GraphQL */ `
  query MoviesByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moviesByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        year
        title
        organizationID
        admin
        team
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchMovies = /* GraphQL */ `
  query SearchMovies(
    $filter: SearchableMovieFilterInput
    $sort: [SearchableMovieSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMovieAggregationInput]
  ) {
    searchMovies(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        year
        title
        organizationID
        admin
        team
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      organizationID
      organization {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      managerID
      manager {
        id
        name
        email
        organizationID
        managerID
        role
        createdAt
        updatedAt
        __typename
      }
      role
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        organizationID
        managerID
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        organizationID
        managerID
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByOrganizationID = /* GraphQL */ `
  query UsersByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        organizationID
        managerID
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByManagerID = /* GraphQL */ `
  query UsersByManagerID(
    $managerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByManagerID(
      managerID: $managerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        organizationID
        managerID
        role
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      user {
        nextToken
        __typename
      }
      movie {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
