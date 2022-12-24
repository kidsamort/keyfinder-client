import styled, { css } from 'styled-components';
import { ErrorProps } from './Error.props';

const ErrorStyles = css<ErrorProps>``;

export const ErrorWrapperStyled = styled.div<ErrorProps>`
  ${ErrorStyles}
`;