import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch, toggleMobileMenu } from '../../../store';
import { Burger, BurgerBar, Shadow } from '../styled';

const ButtonBurgerFC: FC = () => {
  const { isMobileMenuOpen } = useAppSelector(({ mobileMenu }) => mobileMenu);
  const dispatch = useAppDispatch();

  const switcher = () => {
    dispatch(toggleMobileMenu());
  };

  useEffect(() => {
    localStorage.setItem('isMobileMenuOpen', JSON.stringify(isMobileMenuOpen));
  }, [isMobileMenuOpen]);

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
