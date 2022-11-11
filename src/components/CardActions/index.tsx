import { FC, useContext } from 'react';
import { Container, UsedCount, UsedLabel, TextWrap } from './styles';
import { Button } from '../Button';
import { Bookmark } from '../Bookmark';
import { GlobalContext } from '../../context';
import { Asset } from '../../types';

interface ICardActions {
  data: Asset;
}

export const CardActions: FC<ICardActions> = ({ data }) => {
  const isPDF = data.type === 3;
  const buttonLabel = isPDF ? 'download' : 'use';
  const buttonvariant = isPDF ? 'outlined' : 'contained';

  const { use } = useContext(GlobalContext);

  const openLink = () => {
    window.open(data['original-file-src'], '_blank');
  };

  return (
    <Container className="actions">
      <Bookmark id={data.id} />
      <TextWrap>
        <UsedCount>{data['used-total-count']}</UsedCount>
        <UsedLabel>Used (total)</UsedLabel>
      </TextWrap>
      <Button type="button" variant={buttonvariant} onClick={isPDF ? openLink : () => use(data.id)}>
        {buttonLabel}
      </Button>
    </Container>
  );
};
