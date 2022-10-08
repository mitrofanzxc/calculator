import styled from 'styled-components';

const HistoryWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 10px;
  max-width: 300px;
  max-height: 540px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  overflow: scroll;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const HistoryTittle = styled.h2`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  text-align: center;
  text-transform: uppercase;
`;

export { HistoryWrapper, HistoryTittle };
