import styled from 'styled-components';
import { colors } from '../../styles/constants';
export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  padding: 13px 16px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

export const UsedCount = styled.p`
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.white.primary};
`;

export const UsedLabel = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.white.primary};
`;

export const TextWrap = styled.div`
  height: 34px;
`;
