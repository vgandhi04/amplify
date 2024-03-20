/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMovie = /* GraphQL */ `
  mutation CreateMovie(
    $input: CreateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    createMovie(input: $input, condition: $condition) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMovie = /* GraphQL */ `
  mutation UpdateMovie(
    $input: UpdateMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    updateMovie(input: $input, condition: $condition) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMovie = /* GraphQL */ `
  mutation DeleteMovie(
    $input: DeleteMovieInput!
    $condition: ModelMovieConditionInput
  ) {
    deleteMovie(input: $input, condition: $condition) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrg = /* GraphQL */ `
  mutation CreateOrg(
    $input: CreateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    createOrg(input: $input, condition: $condition) {
      id
      name
      user {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateOrg = /* GraphQL */ `
  mutation UpdateOrg(
    $input: UpdateOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    updateOrg(input: $input, condition: $condition) {
      id
      name
      user {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteOrg = /* GraphQL */ `
  mutation DeleteOrg(
    $input: DeleteOrgInput!
    $condition: ModelOrgConditionInput
  ) {
    deleteOrg(input: $input, condition: $condition) {
      id
      name
      user {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
