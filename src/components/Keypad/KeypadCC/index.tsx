import { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import {
  setInputValue,
  deleteInputValue,
  equalInputValue,
  resetInputValue,
  addToHistory,
} from '../../../store';
import { calcTotalMiddleware } from '../../../utils';
import { CalculatorButton, CalculatorButtonClean, CalculatorButtonEqual } from '../styled';
import { IKeypadCC } from './interface';

class KeypadCC extends Component<IKeypadCC> {
  constructor(props: IKeypadCC) {
    super(props);
    this.handleSetInputValue = this.handleSetInputValue.bind(this);
    this.handleDeleteInputValue = this.handleDeleteInputValue.bind(this);
    this.handleEqualTotalValue = this.handleEqualTotalValue.bind(this);
    this.handleClearInputValue = this.handleClearInputValue.bind(this);
  }

  componentDidUpdate(prevProps: IKeypadCC) {
    if (this.props.calculator.history !== prevProps.calculator.history) {
      localStorage.setItem('history', JSON.stringify(this.props.calculator.history));
    }
  }

  handleSetInputValue(event: MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement;
    const value = target.textContent as string;
    this.props.setInputValue(value);
  }

  handleDeleteInputValue() {
    this.props.deleteInputValue();
  }

  handleEqualTotalValue() {
    this.props.addToHistory(this.props.calculator.inputValue);
    this.props.equalInputValue(calcTotalMiddleware(this.props.calculator.inputValue).toString());
  }

  handleClearInputValue() {
    this.props.resetInputValue();
  }

  render() {
    return (
      <>
        <CalculatorButton onClick={this.handleClearInputValue}>C</CalculatorButton>
        <CalculatorButton>%</CalculatorButton>
        <CalculatorButton>&plusmn;</CalculatorButton>
        <CalculatorButton onClick={this.handleDeleteInputValue}>&#8594;</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>+</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>-</CalculatorButton>
        <CalculatorButtonEqual onClick={this.handleEqualTotalValue}>=</CalculatorButtonEqual>
        <CalculatorButton onClick={this.handleSetInputValue}>*</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>/</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>7</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>8</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>9</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>&#40;</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>4</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>5</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>6</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>&#41;</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>1</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>2</CalculatorButton>
        <CalculatorButton onClick={this.handleSetInputValue}>3</CalculatorButton>
        <CalculatorButtonClean onClick={this.handleSetInputValue}>0</CalculatorButtonClean>
        <CalculatorButton onClick={this.handleSetInputValue}>.</CalculatorButton>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

const mapDispatchToProps = {
  setInputValue,
  deleteInputValue,
  equalInputValue,
  resetInputValue,
  addToHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeypadCC);
