import styled from '@emotion/styled';
import RepositoryListItem from './RepositoryListItem';
import useRepositoryList from './useRepositoryList';

interface Props {
  searchKeyword: string;

  onClickShowMoreButton(): void;
}

export default function RepositoryList({ searchKeyword, onClickShowMoreButton }: Props) {
  const items = useRepositoryList(searchKeyword);

  return (
    <>
      <Container>
        {items.map(({ id, stargazers, name, description }) => (
          <RepositoryListItem
            key={id}
            title={name}
            content={description}
            starCount={stargazers.totalCount}
          />
        ))}
      </Container>
      <ShowMoreButton type="submit" onClick={onClickShowMoreButton}>
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
