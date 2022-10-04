import styled from '@emotion/styled';
import { graphql, useFragment, useMutation } from 'react-relay';
import { RepositoryStar$key } from '../../../__generated__/RepositoryStar.graphql';

const query = graphql`
  fragment RepositoryStar on Repository {
    id
    viewerHasStarred
    stargazers {
      totalCount
    }
  }
`;

const removeStarQuery = graphql`
  mutation RepositoryStarRemoveMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        ...RepositoryStar
      }
    }
  }
`;

const addStarQuery = graphql`
  mutation RepositoryStarAddMutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        ...RepositoryStar
      }
    }
  }
`;

interface Props {
  fragmentRef: RepositoryStar$key;
}

export default function RepositoryStar({ fragmentRef }: Props) {
  const item = useFragment<RepositoryStar$key>(query, fragmentRef);
  const [addStar] = useMutation(addStarQuery);
  const [removeStar] = useMutation(removeStarQuery);

  const { id, stargazers, viewerHasStarred } = item;

  const starConfig = {
    variables: {
      input: {
        starrableId: id,
      },
    },
  };

  const toggleStar = () => {
    viewerHasStarred ? removeStar(starConfig) : addStar(starConfig);
  };

  return (
    <Button type="button" onClick={toggleStar}>
      <span>{viewerHasStarred ? '⭐' : '⭑'}</span>
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
