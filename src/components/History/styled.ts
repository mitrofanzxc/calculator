import styled from 'styled-components';

const HistoryWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 10px;
  max-width: 300px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  overflow: scroll;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    max-height: 540px;
  }
`;

const HistoryTittle = styled.h2`
  text-transform: uppercase;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export { HistoryWrapper, HistoryTittle };
