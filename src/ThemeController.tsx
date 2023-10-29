import React, { PropsWithChildren } from 'react';
import { getTheme, themes } from './theme';
import { ThemeProvider } from '@mui/material';

const ThemeController: React.FC<PropsWithChildren< IThemeControllerProps>> = ({themeName, children}) => {
   const theme = getTheme(themeName);

   return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
   );
};

export interface IThemeControllerProps {
   themeName: themes
}

export default React.memo(ThemeController);