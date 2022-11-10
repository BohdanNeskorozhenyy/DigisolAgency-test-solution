import { FC } from 'react';
import { Asset } from '../../types';
import { Container } from './styles';
import { Card } from '../Card/index';

interface ICards {
  data: Asset[];
}
export const Cards: FC<ICards> = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </Container>
  );
};
