import { FC } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../components';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
