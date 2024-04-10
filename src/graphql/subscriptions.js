/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onCreateMovie(filter: $filter) {
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
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie($filter: ModelSubscriptionMovieFilterInput) {
    onUpdateMovie(filter: $filter) {
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
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie($filter: ModelSubscriptionMovieFilterInput) {
    onDeleteMovie(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
