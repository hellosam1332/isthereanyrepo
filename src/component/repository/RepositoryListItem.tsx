import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';
import { RepositoryListItem$key } from '../../../__generated__/RepositoryListItem.graphql';

const query = graphql`
  fragment RepositoryListItem on Repository {
    name
    description
  }
`;

interface Props {
  fragmentRef: RepositoryListItem$key;
}

export default function RepositoryListItem({ fragmentRef }: Props) {
  const { name, description } = useFragment<RepositoryListItem$key>(query, fragmentRef);

  return (
    <Container>
      <h3>{name}</h3>
      <span>{description}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
