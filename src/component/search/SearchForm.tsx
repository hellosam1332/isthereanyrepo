import styled from '@emotion/styled';
import InputKeyword from './InputKeyword';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface Props {
  onSubmit(keyword: string): void;
}

export default function SearchForm({ onSubmit }: Props) {
  const [input, setInput] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(input);
    },
    [input, onSubmit],
  );

  const handleChangeKeyword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.trim());
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputKeyword
          value={input}
          onChange={handleChangeKeyword}
          placeholder="검색어를 입력해주세요"
        />
        <SubmitButton type="submit">검색</SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Form = styled.form`
  display: flex;
  width: 40%;
  height: 40px;
`;

const SubmitButton = styled.button`
  width: 50px;
`;
