import styled from '@emotion/styled';
import RepositoryListItem from './RepositoryListItem';
import useRepositoryList from './useRepositoryList';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { RepositoryListQuery } from '../../../__generated__/RepositoryListQuery.graphql';
import { RepositoryListItem$key } from '../../../__generated__/RepositoryListItem.graphql';
import { REPOSITORY_LIST_PAGE_SIZE } from '../../../config';

const query = graphql`
  query RepositoryListQuery($query: String!, $count: Int!) {
    ...useRepositoryListFragment @arguments(query: $query, count: $count)
  }
`;

interface Props {
  searchKeyword: string;
}

export default function RepositoryList({ searchKeyword }: Props) {
  const data = useLazyLoadQuery<RepositoryListQuery>(query, {
    query: searchKeyword,
    count: REPOSITORY_LIST_PAGE_SIZE,
  });

  const { edges, loadNext, hasNext } = useRepositoryList(data);

  return (
    <>
      <Container>
        {edges.map((edge) => (
          <RepositoryListItem key={edge.cursor} fragmentRef={edge.node as RepositoryListItem$key} />
        ))}
      </Container>
      <ShowMoreButton
        type="submit"
        disabled={!hasNext}
        onClick={() => loadNext(REPOSITORY_LIST_PAGE_SIZE)}
      >
        더 보기
      </ShowMoreButton>
    </>
  );
}

const Container = styled.div`
  padding: 50px 0;
`;

const ShowMoreButton = styled.button`
  height: 35px;
`;
