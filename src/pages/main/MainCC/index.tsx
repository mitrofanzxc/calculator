import { Component } from 'react';
import { CalculatorCC, HistoryCC } from '../../../components';
import { MainWrapper } from '../styled';

class MainCC extends Component {
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
