import styled, { css } from 'styled-components';
import { AuthProps } from './Auth.props';

const AuthStyles = css<AuthProps>``;

export const AuthWrapperStyled = styled.div<AuthProps>`
  ${AuthStyles}
`;