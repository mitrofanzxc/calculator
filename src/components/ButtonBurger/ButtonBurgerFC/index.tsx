import { FC } from 'react';
import { useAppSelector, useAppDispatch, toggleMobileMenu } from '../../../store';
import { Burger, BurgerBar, Shadow } from '../styled';

const ButtonBurgerFC: FC = () => {
  const { isMobileMenuOpen } = useAppSelector(({ mobileMenu }) => mobileMenu);
  const dispatch = useAppDispatch();

  const switcher = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <>
      <Shadow onClick={switcher} isMobileMenuOpen={isMobileMenuOpen} />
      <Burger onClick={switcher}>
        <BurgerBar isMobileMenuOpen={isMobileMenuOpen} />
        <BurgerBar isMobileMenuOpen={isMobileMenuOpen} />
      </Burger>
    </>
  );
};

export { ButtonBurgerFC };
