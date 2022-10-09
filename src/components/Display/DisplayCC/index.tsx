import { Component } from 'react';
import { connect } from 'react-redux';
import { CalculatorForm, CalculatorInput } from '../styled';
import { IDisplayCC } from './interface';

class DisplayCC extends Component<IDisplayCC> {
  render() {
    const { inputValue } = this.props.calculator;

    return (
      <CalculatorForm>
        <CalculatorInput type="text" value={inputValue} readOnly />
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
