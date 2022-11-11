import { FC, useContext } from 'react';
import { BookmarkIcon, CheckedBookmarkIcon } from '../../../assets/icons';
import { GlobalContext } from '../../context';
import { Box } from './styles';

interface IBookmark {
  id: number;
}
export const Bookmark: FC<IBookmark> = ({ id }) => {
  const { toggleSave, savedAssets } = useContext(GlobalContext);
  const checked = savedAssets[id];
  return (
    <Box onClick={() => toggleSave(id)}>{checked ? <CheckedBookmarkIcon /> : <BookmarkIcon />}</Box>
  );
};
