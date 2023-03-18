import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from 'components/app/app';
import * as S from './components/app/app.style';
import { defaultTheme } from "themes/default-theme";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

