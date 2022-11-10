import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const ImgPlaceholderWrap = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray.primary};
  svg {
    width: 48px;
    height: 54.5px;
    path {
      fill: ${colors.gray.secondary};
    }
  }
`;
