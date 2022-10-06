import styled from 'styled-components';

const ErrorWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  width: 95%;
  margin: 0 auto;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

export { ErrorWrapper };
