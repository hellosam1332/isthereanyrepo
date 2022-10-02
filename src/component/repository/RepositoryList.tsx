import styled from '@emotion/styled';
import RepositoryListItem from './RepositoryListItem';
import { Repository } from '../../interface/repository.interface';

interface Props {
  listItems: Repository[];

  onClickShowMoreButton(): void;
}

export default function RepositoryList({ listItems, onClickShowMoreButton }: Props) {
  return (
    <>
      <Container>
        {listItems.map(({ id, starCount, content, title }) => (
          <RepositoryListItem key={id} title={title} content={content} starCount={starCount} />
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
