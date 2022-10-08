import { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import {
  setInputValue,
  deleteInputValue,
  equalInputValue,
  addToHistory,
  ICalculatorState,
} from '../../../store/slices/calculatorSlice';
import { calcTotalMiddleware } from '../../../utils';
import { CalculatorButton, CalculatorButtonClean, CalculatorButtonEqual } from '../styled';

interface IKeypadCC {
  calculator: ICalculatorState;
  setInputValue: any;
  deleteInputValue: any;
  addToHistory: any;
  equalInputValue: any;
}

class KeypadCC extends Component<IKeypadCC> {
  constructor(props: IKeypadCC) {
    super(props);
    this.handleSetInputValue = this.handleSetInputValue.bind(this);
    this.handleDeleteInputValue = this.handleDeleteInputValue.bind(this);
    this.handleEqualTotalValue = this.handleEqualTotalValue.bind(this);
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

  render() {
    console.log('this', this);
    return (
      <>
        <CalculatorButton>AC</CalculatorButton>
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
        <CalculatorButton onClick={this.handleSetInputValue}>&sdot;</CalculatorButton>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator,
  };
};

const mapDispatchToProps = { setInputValue, deleteInputValue, equalInputValue, addToHistory };

export default connect(mapStateToProps, mapDispatchToProps)(KeypadCC);
