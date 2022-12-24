import styled, { DefaultTheme } from 'styled-components';
import { colors, fonts } from 'style/helpers.styled';


export const NavItemWrapperStyled = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  cursor: pointer;
  :hover {
    color: ${colors.accents.blue.azure};
    svg {
      fill: ${colors.accents.blue.azure};
      transition: none;
    }
  }
`;
export const IconStyled = styled.div`
  svg {
    width: 24px;
    height: 24px;
    align-items: center;
    transition: none;
    fill: ${({ theme }) => theme.text};
  }
`;
export const TitleStyled = styled.div`
  ${fonts.miniDescription};
`;