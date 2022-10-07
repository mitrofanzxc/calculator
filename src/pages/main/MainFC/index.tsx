import { FC } from 'react';
import { CalculatorFC, HistoryFC } from '../../../components';
import { MainWrapper } from '../styled';

const MainFC: FC = () => {
  return (
    <MainWrapper>
      <CalculatorFC />
      <HistoryFC />
    </MainWrapper>
  );
};

export { MainFC };
