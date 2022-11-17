import { useState } from 'react';
import { GlobalStyles } from 'components/GlobalStyles';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';


export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  

  const onSearchSubmit = formSearchQuery => {
    const formatedSearchQuery = formSearchQuery.trim().toLowerCase();

    if (!formatedSearchQuery || searchQuery === formatedSearchQuery)
      return;

    setSearchQuery(formatedSearchQuery);
    setCurrentPage(1);
  };

  const onLoadMore = () => {
    currentPage(prevCurrentPage => prevCurrentPage + 1);
  };
    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={onSearchSubmit} />
        <main>
          <ImageGallery
            searchQuery={searchQuery}
            currentPage={currentPage}
            onLoadMore={onLoadMore}
          />
        </main>
      </>
    );
  }