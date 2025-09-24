/* eslint-disable react-refresh/only-export-components */
import type { PropsWithChildren, ReactNode } from 'react';
import { createContext, use, useCallback, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextResult = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextResult | null>(null);

export const useTheme = (): ThemeContextResult => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: PropsWithChildren): ReactNode => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
