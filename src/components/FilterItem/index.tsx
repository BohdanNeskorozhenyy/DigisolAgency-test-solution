import { FC, useMemo } from 'react';
import { CheckboxWrap } from './styles';

import {
  TEMPLATE_TYPE_NAME,
  IMAGE_TYPE_NAME,
  VIDEO_TYPE_NAME,
  PDF_TYPE_NAME,
  GIF_TYPE_NAME,
  ARTICLE_TYPE_NAME,
} from '../../constants';

import {
  CheckIcon,
  TemplateIcon,
  ImageIcon,
  VideoIcon,
  PdfIcon,
  GifIcon,
  ArticleIcon,
} from '../../../assets/icons';

interface IFilterItem {
  assetsType: 0 | 1 | 2 | 3 | 4 | 5;
  checked: boolean;
  onChange: (value: number) => void;
}

export const FilterItem: FC<IFilterItem> = ({ assetsType, checked, onChange }) => {
  const name = useMemo(() => {
    switch (assetsType) {
      case 0:
        return TEMPLATE_TYPE_NAME;
      case 1:
        return IMAGE_TYPE_NAME;
      case 2:
        return VIDEO_TYPE_NAME;
      case 3:
        return PDF_TYPE_NAME;
      case 4:
        return GIF_TYPE_NAME;
      case 5:
        return ARTICLE_TYPE_NAME;
      default:
        return '';
    }
  }, [assetsType]);

  const icon = useMemo(() => {
    switch (assetsType) {
      case 0:
        return <TemplateIcon />;
      case 1:
        return <ImageIcon />;
      case 2:
        return <VideoIcon />;
      case 3:
        return <PdfIcon />;
      case 4:
        return <GifIcon />;
      case 5:
        return <ArticleIcon />;
      default:
        return null;
    }
  }, [assetsType]);

  return (
    <CheckboxWrap>
      <input checked={checked} onChange={() => onChange(assetsType)} type="checkbox" />
      <label>
        <span className="custom-checkbox">
          <CheckIcon />
        </span>
        <span className="custom-label">
          {icon}
          {name}
        </span>
      </label>
    </CheckboxWrap>
  );
};
