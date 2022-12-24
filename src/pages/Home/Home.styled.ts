import styled, { css } from 'styled-components';
import { HomeProps } from './Home.props';

const HomeStyles = css<HomeProps>``;

export const HomeWrapperStyled = styled.div<HomeProps>`
  ${HomeStyles}
`;