import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const StyledButton = styled.button<{ variant: string }>`
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  height: 32px;
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  color: ${colors.white.primary};
  background-color: ${(props) =>
    props.variant === 'contained' ? colors.blue.primary : 'transparent'};
  border: ${(props) =>
    props.variant === 'contained' ? 'none' : `1px solid ${colors.white.primary}`};
  &:active {
    transition: 0.3s;
    transform: scale(0.9);
  }
`;
