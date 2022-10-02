import styled from '@emotion/styled';
import RepositoryListItem from './RepositoryListItem';
import { Repository } from '../../interface/repository.interface';

interface Props {
  listItems: Repository[];
}

export default function RepositoryList({ listItems }: Props) {
  return (
    <Container>
      {listItems.map(({ id, starCount, content, title }) => (
        <RepositoryListItem key={id} title={title} content={content} starCount={starCount} />
      ))}
    </Container>
  );
}

const Container = styled.div``;
