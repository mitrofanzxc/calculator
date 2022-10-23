import { Component } from 'react';
import { DisplayCC, KeypadCC } from '../..';
import { CalculatorWrapper } from '../styled';

class CalculatorCC extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <DisplayCC />
        <KeypadCC />
      </CalculatorWrapper>
    );
  }
}

export { CalculatorCC };
