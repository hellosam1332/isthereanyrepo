import { graphql, useLazyLoadQuery } from 'react-relay';
import { Repository } from '../../interface/repository.interface';
import { useRepositoryListQuery } from '../../../__generated__/useRepositoryListQuery.graphql';

const query = graphql`
  query useRepositoryListQuery($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 5) {
      repositoryCount
      edges {
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

/**
 * 레포지토리 검색 쿼리를 실행하고 응답 데이터를 매핑하여 반환
 * @param searchKeyword 검색어
 */
export default function useRepositoryList(searchKeyword: string): Repository[] {
  const data = useLazyLoadQuery<useRepositoryListQuery>(query, {
    queryString: searchKeyword,
  });

  return (
    data.search.edges
      ?.filter(isDefined)
      .map((edge) => edge.node)
      .filter(isValidNode) || []
  );
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
