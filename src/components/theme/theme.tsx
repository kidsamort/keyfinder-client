import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from 'style/theme.styled';
import useAppTheme from 'hooks/theme';
import { useAppDispatch } from 'hooks/rtk';
import { ITheme } from 'redux/reducer/theme.slice';

const Theme = ({ children }: { children: ReactNode }): JSX.Element => {
  const { nowTheme, allTheme, setTheme } = useAppTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ITheme;

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && allTheme.includes(savedTheme)) {
      dispatch(setTheme(savedTheme));
    } else if (prefersDark) {
      dispatch(setTheme('dark'));
      localStorage.setItem('theme', 'dark');
    } else {
      dispatch(setTheme('light'));
      localStorage.setItem('theme', 'light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={nowTheme === 'dark' ? dark : light}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;