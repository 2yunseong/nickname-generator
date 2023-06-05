import React from 'react';
import './App.css';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import ResetStyle from './styles/resetStyle';
import { Outlet } from 'react-router-dom';
import Layout from './components/common/Layout';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <ResetStyle />
        <Layout>
          <Outlet />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
