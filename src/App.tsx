import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';
import { Layout, MainFC, MainCC, Settings, NotFound } from './pages';
import { paths, lightTheme, darkTheme } from './constants';
import { GlobalStyles } from './styled';
import './normalize.scss';

const App: FC = () => {
  const { mainFC, mainCC, settings, any } = paths;
  const { isLightTheme } = useAppSelector(({ theme }) => theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={mainFC} element={<Layout />}>
          <Route index element={<MainFC />} />
          <Route path={mainCC} element={<MainCC />} />
          <Route path={settings} element={<Settings />} />
          <Route path={any} element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export { App };
