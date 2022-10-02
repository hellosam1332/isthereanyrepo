import styled from '@emotion/styled';

interface Props {
  title: string;
  content: string;
  starCount: number;
}

export default function RepositoryListItem({ starCount, content, title }: Props) {
  const toggleStar = () => {
    // TODO 별 버튼 기능 구현
  };

  return (
    <Container>
      <h3>{title}</h3>
      <span>{content}</span>
      <StartCount type="button" onClick={toggleStar}>
        <span>⭐</span>
        <span>{starCount}</span>
      </StartCount>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StartCount = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50px;
  height: 30px;
  padding: 0 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  :hover {
    background-color: #ddd;
  }
`;
