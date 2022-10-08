import { Component } from 'react';
import { connect } from 'react-redux';
import { ICalculatorState } from '../../../store/slices/calculatorSlice';
import { HistoryWrapper, HistoryTittle } from '../styled';

interface IHistoryCC {
  calculator: ICalculatorState;
}

class HistoryCC extends Component<IHistoryCC> {
  render() {
    const { history } = this.props.calculator;

    return (
      <HistoryWrapper>
        <HistoryTittle>History CC</HistoryTittle>
        {history &&
          history.map((value, index) => {
            return <h3 key={`${JSON.stringify(value) + index}`}>{value}</h3>;
          })}
      </HistoryWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

export default connect(mapStateToProps)(HistoryCC);
