import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Outlet />
    </ThemeProvider>
  );
}

export default App;
