import { ThemeSlice } from 'redux/reducer/theme.slice';
import { useAppSelector } from './rtk';

export default function useAppTheme() {
  const { nowTheme, allTheme } = useAppSelector((state) => state.themeReducer);
  const { setTheme } = ThemeSlice.actions;

  return { nowTheme, setTheme, allTheme };
}