import styled from '@emotion/styled';
import RepositoryListItem from './RepositoryListItem';
import useRepositoryList from './useRepositoryList';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { RepositoryListQuery } from '../../../__generated__/RepositoryListQuery.graphql';
import { RepositoryListItem$key } from '../../../__generated__/RepositoryListItem.graphql';

const query = graphql`
  query RepositoryListQuery($query: String!) {
    ...useRepositoryListFragment @arguments(query: $query)
  }
`;

interface Props {
  searchKeyword: string;
}

export default function RepositoryList({ searchKeyword }: Props) {
  const data = useLazyLoadQuery<RepositoryListQuery>(query, {
    query: searchKeyword,
  });

  const { edges, loadNext, hasNext } = useRepositoryList(data);

  return (
    <>
      <Container>
        {edges.map((edge) => (
          <RepositoryListItem key={edge.cursor} fragmentRef={edge.node as RepositoryListItem$key} />
        ))}
      </Container>
      <ShowMoreButton type="submit" disabled={!hasNext} onClick={() => loadNext(5)}>
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
