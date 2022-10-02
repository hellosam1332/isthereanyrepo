import styled from '@emotion/styled';

interface Props {
  title: string;
  content: string;
  starCount: number;
}

export default function RepositoryListItem({ starCount, content, title }: Props) {
  return (
    <Container>
      <h3>{title}</h3>
      <span>{content}</span>
      <span>⭐{starCount}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
