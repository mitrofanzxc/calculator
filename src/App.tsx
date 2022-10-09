import { FC } from 'react';
import { Routes, Route } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store';
import { Layout, MainFC, MainCC, SettingsFC, SettingsCC, NotFound } from './pages';
import { paths, lightTheme, darkTheme } from './constants';
import { GlobalStyles } from './styled';
import './normalize.scss';

const App: FC = () => {
  const { mainFC, mainCC, settingsFC, settingsCC, any } = paths;
  const { isLightTheme } = useAppSelector(({ theme }) => theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={mainFC} element={<Layout />}>
          <Route index element={<MainFC />} />
          <Route path={mainCC} element={<MainCC />} />
          <Route path={settingsFC} element={<SettingsFC />} />
          <Route path={settingsCC} element={<SettingsCC />} />
          <Route path={any} element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export { App };
