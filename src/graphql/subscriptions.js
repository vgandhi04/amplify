/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onCreateMovie(filter: $filter) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onUpdateMovie(filter: $filter) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie($filter: ModelSubscriptionMovieFilterInput) {
    onDeleteMovie(filter: $filter) {
      year
      title
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrg = /* GraphQL */ `
  subscription OnCreateOrg($filter: ModelSubscriptionOrgFilterInput) {
    onCreateOrg(filter: $filter) {
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
export const onUpdateOrg = /* GraphQL */ `
  subscription OnUpdateOrg($filter: ModelSubscriptionOrgFilterInput) {
    onUpdateOrg(filter: $filter) {
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
export const onDeleteOrg = /* GraphQL */ `
  subscription OnDeleteOrg($filter: ModelSubscriptionOrgFilterInput) {
    onDeleteOrg(filter: $filter) {
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
