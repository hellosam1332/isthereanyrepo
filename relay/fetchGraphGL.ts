import fetch from 'isomorphic-fetch';
import type { Variables } from 'relay-runtime';

const fetchGraphQL = async (query: string, variables: Variables) => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_PAT}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
};

export default fetchGraphQL;
