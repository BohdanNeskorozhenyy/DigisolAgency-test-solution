import { FC, useState } from 'react';
import { TagsBox, Container, Button } from './styles';
import { RestTagsModal } from './RestTagsModal';

interface ITags {
  tags?: string[];
}
export const Tags: FC<ITags> = ({ tags }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showButton = tags && tags?.length > 3;
  const restTags = showButton && tags.filter((tag, i) => i > 3);
  return (
    <Container>
      {tags && (
        <TagsBox>
          {showButton ? tags?.filter((tag, i) => i <= 3).join('/') : tags?.join('/')}
        </TagsBox>
      )}
      {restTags && restTags.length !== 0 && (
        <Button onClick={() => setIsOpen(true)}>+{restTags.length}</Button>
      )}
      {restTags && isOpen && (
        <RestTagsModal onClose={() => setIsOpen(false)} isOpen={isOpen} tags={restTags} />
      )}
    </Container>
  );
};
