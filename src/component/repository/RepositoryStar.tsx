import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';
import { RepositoryStar$key } from '../../../__generated__/RepositoryStar.graphql';

const query = graphql`
  fragment RepositoryStar on Repository {
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`;

interface Props {
  fragmentRef: RepositoryStar$key;
}

export default function RepositoryStar({ fragmentRef }: Props) {
  const { stargazers } = useFragment<RepositoryStar$key>(query, fragmentRef);

  return (
    <Button type="button">
      <span>⭐</span>
      <span>{stargazers.totalCount}</span>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 30px;
  gap: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  :hover {
    background-color: #ddd;
  }
`;
