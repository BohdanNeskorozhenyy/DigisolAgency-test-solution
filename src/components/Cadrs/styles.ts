import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 800px) {
    justify-content: center;
    height: calc(100vh - 279px);
    overflow-y: auto;
  }
`;
