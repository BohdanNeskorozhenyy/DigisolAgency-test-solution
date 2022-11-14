import { FC, useMemo } from 'react';
import {
  Box,
  CardInfoBlock,
  TitleBox,
  Description,
  ImageBox,
  Footer,
  FooterIconBox,
  FooterTextBox,
  FooterLink,
  FooterTitle,
  Spiner,
} from './styles';
import { ImagePlaceholder } from '../ImagePlaceholder';
import { Tags } from '../Tags';
import { Asset } from '../../types';
import { CardActions } from '../CardActions';
import Image from 'next/image';
import {
  TemplateIcon,
  ImageIcon,
  VideoIcon,
  PdfIcon,
  GifIcon,
  ArticleIcon,
} from '../../../assets/icons';

export interface ICard {
  data: Asset;
}

export const Card: FC<ICard> = ({ data }) => {
  const icon = useMemo(() => {
    switch (data.type) {
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
  }, [data.type]);

  return (
    <Box>
      <ImageBox>
        {data['preview-image'] ? (
          <Image layout="fill" objectFit="cover" alt="card_image" src={data['preview-image']} />
        ) : (
          <ImagePlaceholder icon={icon} />
        )}
        <Spiner />
        <CardActions data={data} />
      </ImageBox>
      <CardInfoBlock>
        <TitleBox>
          {icon}
          <span>{data.title}</span>
        </TitleBox>
        {data.tags && <Tags tags={data.tags} />}
        {data.description && <Description>{data.description}</Description>}
      </CardInfoBlock>
      {data.type === 5 && (
        <Footer>
          <FooterIconBox>{icon}</FooterIconBox>
          <FooterTextBox>
            <FooterTitle>{data['external-link']?.title}</FooterTitle>
            <FooterLink target="_blank" href={data['external-link']?.href}>
              {data['external-link']?.href}
            </FooterLink>
          </FooterTextBox>
        </Footer>
      )}
    </Box>
  );
};
