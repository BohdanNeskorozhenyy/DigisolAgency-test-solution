import { FC, useState, useEffect } from 'react';
import { Container, FilterWrapper } from './styles';
import { Filter } from '../components';
import { Cards } from '../components/Cadrs';
import { GlobalContext } from '../context';
import { Asset } from '../types';
import { useRouter } from 'next/router';
import { CREATED_AT_PARAM } from '../constants';

import { data } from '../../mockData';

export const Layout: FC = () => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<Asset[]>([]);
  const [savedAssets, setSavedAssets] = useState<{ [key: string]: boolean }>({});
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({
    0: false,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    localStorage.getItem('savedAssets') &&
      setSavedAssets(JSON.parse(localStorage.getItem('savedAssets') || ''));
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => filters[item.type]).slice(0, 50);
    const sorted = filtered.sort((a, b) =>
      router.query['sort-by'] === CREATED_AT_PARAM
        ? b['created-at'] - a['created-at']
        : b['used-total-count'] - a['used-total-count'],
    );
    setFilteredData(sorted);
  }, [filters, router.query]);

  const use = (value: any) => alert(`Asset id: ${value}`);

  const toggleSave = (value: any) => {
    setSavedAssets((savedAssets) => ({
      ...savedAssets,
      [value]: !savedAssets[value],
    }));
    localStorage.setItem(
      'savedAssets',
      JSON.stringify({
        ...savedAssets,
        [value]: !savedAssets[value],
      }),
    );
  };

  const toggleFilters = (value: number) => {
    setFilters((filters) => ({ ...filters, [value]: !filters[value] }));
  };

  return (
    <GlobalContext.Provider value={{ use, toggleSave, savedAssets }}>
      <Container>
        <FilterWrapper>
          <Filter toggleFilter={toggleFilters} filters={filters} />
        </FilterWrapper>
        <Cards data={filteredData} />
      </Container>
    </GlobalContext.Provider>
  );
};
