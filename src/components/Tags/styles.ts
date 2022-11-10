import styled from 'styled-components';
import { colors } from '../../styles/constants';

export const TagsBox = styled.div`
  background-color: ${colors.gray.lite};
  height: 18px;
  width: fit-content;
  max-width: calc(100% - 24px);
  border-radius: 3px;
  padding: 2px 4px;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  /* white-space: nowrap; */
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  width: 20px;
  height: 18px;
  border: 1px solid ${colors.gray.lite};
  border-radius: 3px;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  background-color: transparent;
  padding: 0;
  cursor: pointer; ;
`;

export const RestModalContainer = styled.div`
  position: absolute;
  width: 154px;
  height: 66px;
  background-color: ${colors.white.primary};
  filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.16));
  border-radius: 4px;
  padding: 12px 0;
  top: -70px;
  z-index: 200;
`;

export const CloseArea = styled.div`
  position: fixed;
  opacity: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  column-gap: 4px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  padding: 0 12px;
`;
