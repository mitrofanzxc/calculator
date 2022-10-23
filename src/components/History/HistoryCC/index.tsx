import { Component } from 'react';
import { connect } from 'react-redux';
import { HistoryWrapper, HistoryTittle } from '../styled';
import { IHistoryCC } from './interface';

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
