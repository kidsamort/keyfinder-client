import styled, { css } from 'styled-components';
import { PrivateProps } from './Private.props';

const PrivateStyles = css<PrivateProps>``;

export const PrivateWrapperStyled = styled.div<PrivateProps>`
  ${PrivateStyles}
`;