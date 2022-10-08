import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';

const useBodyOverflow = () => {
  const { isMobileMenuOpen } = useAppSelector(({ mobileMenu }) => mobileMenu);

  return useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;

    if (isMobileMenuOpen) {
      body.classList.add('overflow_hidden');
    } else {
      body.classList.remove('overflow_hidden');
    }
  }, [isMobileMenuOpen]);
};

export { useBodyOverflow };
