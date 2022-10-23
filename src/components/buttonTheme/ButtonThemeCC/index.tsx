import { Component } from 'react';
import { connect } from 'react-redux';
import { switchTheme } from '../../../store';
import { ButtonThemeWrapper, ButtonThemeLogo } from '../styled';
import { IButtonThemeCC } from './interface';
import dark from '../../../assets/dark.svg';
import light from '../../../assets/light.svg';

class ButtonThemeCC extends Component<IButtonThemeCC> {
  constructor(props: IButtonThemeCC) {
    super(props);
    this.switcher = this.switcher.bind(this);
  }

  componentDidUpdate(prevProps: IButtonThemeCC) {
    if (this.props.theme.isLightTheme !== prevProps.theme.isLightTheme) {
      localStorage.setItem('isLightTheme', JSON.stringify(this.props.theme.isLightTheme));
    }
  }

  switcher() {
    this.props.switchTheme();
  }

  render() {
    const { isLightTheme } = this.props.theme;

    return (
      <ButtonThemeWrapper onClick={this.switcher}>
        <span>Switch Theme</span>
        <ButtonThemeLogo src={isLightTheme ? light : dark} alt="theme-logo" />
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
