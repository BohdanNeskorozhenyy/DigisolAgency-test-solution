import { ImgPlaceholderWrap } from './styles';
import { ReactElement, FC } from 'react';

interface IImagePlaceholder {
  icon: ReactElement | null;
}
export const ImagePlaceholder: FC<IImagePlaceholder> = ({ icon }) => {
  return <ImgPlaceholderWrap>{icon}</ImgPlaceholderWrap>;
};
