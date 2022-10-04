import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';
import { RepositoryListItem$key } from '../../../__generated__/RepositoryListItem.graphql';
import RepositoryStar from './RepositoryStar';

const query = graphql`
  fragment RepositoryListItem on Repository {
    name
    description
    ...RepositoryStar
  }
`;

interface Props {
  fragmentRef: RepositoryListItem$key;
}

export default function RepositoryListItem({ fragmentRef }: Props) {
  const item = useFragment<RepositoryListItem$key>(query, fragmentRef);
  const { name, description } = item;

  return (
    <Container>
      <h3>{name}</h3>
      <span>{description}</span>
      <RepositoryStar fragmentRef={item} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
