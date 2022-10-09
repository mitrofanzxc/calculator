import { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMobileMenu } from '../../../store';
import { Burger, BurgerBar, Shadow } from '../styled';
import { IButtonBurgerCC } from './interface';

class ButtonBurgerCC extends Component<IButtonBurgerCC> {
  constructor(props: IButtonBurgerCC) {
    super(props);
    this.switcher = this.switcher.bind(this);
  }

  switcher() {
    this.props.toggleMobileMenu();
  }

  render() {
    const { mobileMenu } = this.props;

    return (
      <>
        <Shadow onClick={this.switcher} isMobileMenuOpen={mobileMenu.isMobileMenuOpen} />
        <Burger onClick={this.switcher}>
          <BurgerBar isMobileMenuOpen={mobileMenu.isMobileMenuOpen} />
          <BurgerBar isMobileMenuOpen={mobileMenu.isMobileMenuOpen} />
        </Burger>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mobileMenu: state.mobileMenu,
  };
};

const mapDispatchToProps = { toggleMobileMenu };

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBurgerCC);
