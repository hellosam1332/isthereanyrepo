import { Repository } from '../../interface/repository.interface';
import { graphql, usePaginationFragment } from 'react-relay';
import { useRepositoryListFragment$key } from '../../../__generated__/useRepositoryListFragment.graphql';

const query2 = graphql`
  fragment useRepositoryListFragment on Query
  @argumentDefinitions(
    query: { type: "String!" }
    count: { type: "Int", defaultValue: 5 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepositoryListPaginationQuery") {
    search(query: $query, first: $count, after: $cursor, type: REPOSITORY)
      @connection(key: "repository_list_search") {
      repositoryCount
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            description
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export default function useRepositoryList(ref: useRepositoryListFragment$key) {
  const { data, loadNext, hasNext } = usePaginationFragment(query2, ref);

  const items =
    data.search.edges
      ?.filter(isDefined)
      .map((edge) => edge.node)
      .filter(isValidNode) || [];

  return {
    items,
    loadNext,
    hasNext,
  };
}

function isDefined<T>(argument: T | undefined | null): argument is T {
  return argument !== undefined && argument !== null;
}

type RepositoryNode = {
  id?: string;
  name?: string;
  description?: string | null;
  stargazers?: {
    totalCount: number;
  };
};

// Repository 응답 데이터 값들이 undefined 혹은 null 이 올 수 있어 type guard 처리
function isValidNode(node?: RepositoryNode | null): node is Repository {
  if (!node) return false;
  const { id, stargazers, description, name } = node;
  return isDefined(id) && isDefined(stargazers) && isDefined(description) && isDefined(name);
}
