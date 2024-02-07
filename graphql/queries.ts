import {gql} from '@apollo/client';

export const INSURANCE_PLANS = gql`
  query MyQuery {
    insurancePlans {
      createdAt
      description
      name
      package
      price
      updatedAt
    }
  }
`;
