import React, { PropsWithChildren } from 'react';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';

const ThemeController: React.FC<PropsWithChildren< IThemeControllerProps>> = ({themeName, children}) => {
   const theme = themeName === 'light' ? lightTheme : darkTheme;

   return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
   );
};

export interface IThemeControllerProps {
   themeName: 'light' | 'dark'
}

export default ThemeController;