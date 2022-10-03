import fetch from 'isomorphic-fetch';
import type { Variables } from 'relay-runtime';
import { GITHUB_TOKEN } from '../config';

const fetchGraphQL = async (query: string, variables: Variables) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
};

export default fetchGraphQL;
