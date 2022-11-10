import styled from 'styled-components';
import { colors } from '../../styles/constants';
export const CheckboxWrap = styled.div`
  position: relative;
  padding: 8px 0;
  input,
  label {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
  }

  .custom-label {
    display: flex;
    align-items: center;
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }

  [type='checkbox'] {
    opacity: 0;
    position: absolute;
    z-index: 2;
    height: 16px;
    width: 100%;
  }

  .custom-checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    display: inline-block;
    position: relative;
    z-index: 1;
    svg {
      width: 8px;
      position: absolute;
      left: 4.5px;
      top: 5px;
      opacity: 0;
    }
  }

  [type='checkbox']:checked + label .custom-checkbox {
    border-color: blue;
    background: ${colors.blue.primary};
    border: none;
    svg {
      opacity: 1;
    }
  }
`;
