/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTalk = /* GraphQL */ `
  query GetTalk($id: ID!) {
    getTalk(id: $id) {
      id
      name
      speakerName
      speakerBio
      createdAt
      updatedAt
    }
  }
`;
export const listTalks = /* GraphQL */ `
  query ListTalks(
    $filter: ModelTalkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTalks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
