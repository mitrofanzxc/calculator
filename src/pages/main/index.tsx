import { FC } from 'react';
import { Calculator, History } from '../../components';
import { MainWrapper } from './styled';

const Main: FC = () => {
  return (
    <MainWrapper>
      <Calculator />
      <History />
    </MainWrapper>
  );
};

export { Main };
