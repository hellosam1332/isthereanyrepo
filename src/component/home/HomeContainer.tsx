import { Suspense, useState } from 'react';
import styled from '@emotion/styled';

import SearchForm from '../search/SearchForm';
import RepositoryList from '../repository/RepositoryList';

export default function HomeContainer() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const submitSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  const showMore = () => {
    //TODO 더 보기 기능 구현
  };

  return (
    <Container>
      <SearchForm onSubmit={submitSearchKeyword} />
      <Suspense fallback={<h2>loading repositories...</h2>}>
        {searchKeyword && (
          <RepositoryList searchKeyword={searchKeyword} onClickShowMoreButton={showMore} />
        )}
      </Suspense>
    </Container>
  );
}

const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
`;
