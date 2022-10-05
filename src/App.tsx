import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { Layout, Main } from './pages';
import { paths } from './constants';
import './App.scss';

const App: FC = () => {
  const { main, any } = paths;

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={any} element={<Main />} />
      </Route>
    </Routes>
  );
};

export { App };
