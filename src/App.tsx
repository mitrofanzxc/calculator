import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';
import { Layout, Main, NotFound } from './pages';
import { paths, lightTheme, darkTheme } from './constants';
import { GlobalStyles } from './styled';
import './App.scss';

const App: FC = () => {
  const { main, any } = paths;
  const { isLightTheme } = useAppSelector(({ theme }) => theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={any} element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export { App };
