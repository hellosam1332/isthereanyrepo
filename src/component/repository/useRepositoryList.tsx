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
          ...RepositoryListItem
        }
      }
    }
  }
`;

export default function useRepositoryList(ref: useRepositoryListFragment$key) {
  const { data, loadNext, hasNext } = usePaginationFragment(query2, ref);

  const edges = data.search.edges?.filter(isDefined) || [];

  return {
    edges,
    loadNext,
    hasNext,
  };
}

function isDefined<T>(argument: T | undefined | null): argument is T {
  return argument !== undefined && argument !== null;
}
