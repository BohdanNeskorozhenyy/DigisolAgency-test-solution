import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const Box = styled.div`
  min-width: 296px;
  position: fixed;
  padding: 20px 16px;
  height: 279px;
  border-radius: 4px;
  background-color: ${colors.white.primary};
  @media (max-width: 800px) {
    width: 100%;
    max-width: 90vw;
    left: 50%;
    transform: translateX(-50%);
    height: 160px;
  }
  @media (max-width: 600px) {
    height: 220px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 12px;
`;

export const Grid = styled.div`
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 20% 25% 25% 25%;
    gap: 20px;
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
  }
`;
