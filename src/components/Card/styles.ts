import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { colors } from '../../styles/constants';

export const Spiner = styled(ClipLoader)`
  position: absolute;
  left: calc(50% - 17.5px);
  top: calc(50% - 17.5px);
  z-index: -1;
`;
export const Box = styled.div`
  background-color: ${colors.white.primary};
  width: 216px;
  height: 279px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardInfoBlock = styled.div`
  padding: 16px;
  background-color: ${colors.white.primary};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 4px;
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  align-items: center;
  svg {
    width: 16px;
    height: 16px;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
`;

export const ImageBox = styled.div`
  width: 100%;
  flex-grow: 1;
  z-index: 100;
  position: relative;
  &:hover,
  &:active {
    .actions {
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  padding: 9px 16px 16px 16px;
  align-items: center;
  border-top: 1px solid ${colors.gray.lite};
`;

export const FooterTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 24px;
`;
export const FooterIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${colors.gray.primary};
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const FooterTitle = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  height: 14px;
`;

export const FooterLink = styled.a`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.gray.lite100};
  text-decoration: none;
  height: 14px;
`;
