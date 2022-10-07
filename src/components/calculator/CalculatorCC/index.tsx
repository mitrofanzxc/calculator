import { PureComponent } from 'react';
import { CalculatorWrapper } from '../styled';
import { DisplayCC } from '../..';

class CalculatorCC extends PureComponent {
  render() {
    return (
      <CalculatorWrapper>
        <DisplayCC />
      </CalculatorWrapper>
    );
  }
}

export { CalculatorCC };
