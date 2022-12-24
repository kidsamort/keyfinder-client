import styled, { DefaultTheme } from 'styled-components';


export const MobileNavBarWrapperStyled = styled.div<{ theme: DefaultTheme }>`
  padding: 8px 8px 34px 8px;
  display: grid;
  grid-auto-flow: column;
  background: ${({ theme }) => theme.MobileNavBar.bg};
}
`;