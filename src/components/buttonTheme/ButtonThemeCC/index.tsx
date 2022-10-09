import { Component } from 'react';
import { connect } from 'react-redux';
import { switchTheme } from '../../../store';
import { ButtonThemeWrapper } from '../styled';
import { IButtonThemeCC } from './interface';
import dark from '../../../assets/dark.svg';
import light from '../../../assets/light.svg';

class ButtonThemeCC extends Component<IButtonThemeCC> {
  constructor(props: IButtonThemeCC) {
    super(props);
    this.switcher = this.switcher.bind(this);
  }

  switcher() {
    this.props.switchTheme(!this.props.theme.isLightTheme);
  }

  render() {
    const { isLightTheme } = this.props.theme;

    return (
      <ButtonThemeWrapper onClick={this.switcher}>
        <img src={isLightTheme ? light : dark} alt="theme-logo" />
      </ButtonThemeWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = { switchTheme };

export default connect(mapStateToProps, mapDispatchToProps)(ButtonThemeCC);
