import SearchForm from '../search/SearchForm';
import { useState } from 'react';

export default function HomeContainer() {
  const [searchKeyword, setSearchKeyword] = useState('');

  const submitSearchKeyword = () => {
    //TODO 검색 기능 구현
  };

  return (
    <div>
      <SearchForm
        keyword={searchKeyword}
        onChangeKeyword={setSearchKeyword}
        onSubmit={submitSearchKeyword}
      />
    </div>
  );
}
