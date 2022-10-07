import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CalculatorForm, CalculatorInput } from '../styled';

class DisplayCC extends PureComponent {
  render() {
    return (
      <CalculatorForm>
        <CalculatorInput type="text" value="" readOnly />
      </CalculatorForm>
    );
  }
}

export { DisplayCC };

const mapStateToProps = (state) => ({
  inputValue: state.calculator.inputValue,
});

export default connect(mapStateToProps, null)(DisplayCC);
