import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 22px;
  max-width: 1284px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 40px 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FilterWrapper = styled.div`
  min-width: 296px;
  height: 279px;
  @media (max-width: 800px) {
    height: 160px;
  }
  @media (max-width: 600px) {
    height: 220px;
  }
`;
