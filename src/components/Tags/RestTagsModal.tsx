import { FC } from 'react';
import { RestModalContainer, TagsBox, CloseArea, Scroll } from './styles';
interface IRestTagsModal {
  tags: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const RestTagsModal: FC<IRestTagsModal> = ({ tags, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <RestModalContainer>
          <Scroll>
            {tags.map((tag, i) => (
              <TagsBox key={tag}>{tag}</TagsBox>
            ))}
          </Scroll>
        </RestModalContainer>
      )}
      {isOpen && <CloseArea onClick={onClose} />}
    </>
  );
};
