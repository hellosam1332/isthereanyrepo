import styled from '@emotion/styled';
import InputKeyword from './InputKeyword';
import { ChangeEvent, FormEvent, useCallback } from 'react';

interface Props {
  keyword: string;

  onChangeKeyword(value: string): void;

  onSubmit(): void;
}

export default function SearchForm({ keyword, onChangeKeyword, onSubmit }: Props) {
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  const handleChangeKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChangeKeyword(value);
    },
    [onChangeKeyword],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputKeyword
          value={keyword}
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
