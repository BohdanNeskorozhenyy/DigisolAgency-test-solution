import { FC } from 'react';
import { FilterItem } from '../FilterItem';
import { Box, Title, Grid } from './styles';

interface IFilter {
  filters: { [key: string]: boolean };
  toggleFilter: (type: number) => void;
}
export const Filter: FC<IFilter> = ({ filters, toggleFilter }) => {
  return (
    <Box>
      <Title>Asset type</Title>
      <Grid>
        <FilterItem assetsType={0} checked={filters[0]} onChange={() => toggleFilter(0)} />
        <FilterItem assetsType={1} checked={filters[1]} onChange={() => toggleFilter(1)} />
        <FilterItem assetsType={2} checked={filters[2]} onChange={() => toggleFilter(2)} />
        <FilterItem assetsType={3} checked={filters[3]} onChange={() => toggleFilter(3)} />
        <FilterItem assetsType={4} checked={filters[4]} onChange={() => toggleFilter(4)} />
        <FilterItem assetsType={5} checked={filters[5]} onChange={() => toggleFilter(5)} />
      </Grid>
    </Box>
  );
};
