import { PureComponent } from 'react';
import { CalculatorCC, HistoryCC } from '../../../components';
import { MainWrapper } from '../styled';

class MainCC extends PureComponent {
  render() {
    return (
      <MainWrapper>
        <CalculatorCC />
        <HistoryCC />
      </MainWrapper>
    );
  }
}

export { MainCC };
