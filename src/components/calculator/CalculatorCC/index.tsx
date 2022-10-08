import { Component } from 'react';
import { CalculatorWrapper } from '../styled';
import { DisplayCC, KeypadCC } from '../..';

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
