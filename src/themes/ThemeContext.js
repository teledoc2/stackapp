import React, { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

// Define colors based on extracted website theme
const Colors = {
  light: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    text: '#333333',
    accent: '#e74c3c',
    card: '#f9f9f9',
    border: '#e1e1e1',
  },
  dark: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#121212',
    text: '#ffffff',
    accent: '#e74c3c',
    card: '#1e1e1e',
    border: '#2a2a2a',
  },
};

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = {
    colors: Colors[colorScheme || 'light'],
    isDark: colorScheme === 'dark',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
