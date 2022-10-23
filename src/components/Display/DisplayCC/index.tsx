import { Component } from 'react';
import { connect } from 'react-redux';
import { CalculatorForm, CalculatorInput, ErrorInput } from '../styled';
import { IDisplayCC } from './interface';

class DisplayCC extends Component<IDisplayCC> {
  render() {
    const { inputValue, isError } = this.props.calculator;

    return (
      <CalculatorForm>
        <CalculatorInput type="text" value={inputValue} readOnly />
        {isError && <ErrorInput type="text" value={isError.toString()} readOnly />}
      </CalculatorForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

export default connect(mapStateToProps)(DisplayCC);
