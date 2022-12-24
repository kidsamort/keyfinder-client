import React from 'react';
import { IconStyled, NavItemWrapperStyled, TitleStyled } from './NavItem.styled';
import { NavItemComponentProps } from './NavItem.props';


const NavItem = ({ icon, children }: NavItemComponentProps): JSX.Element => {
  return (
    <NavItemWrapperStyled className='NavItem' data-testid='NavItem'>
      <IconStyled>{icon}</IconStyled>
      <TitleStyled>{children}</TitleStyled>
    </NavItemWrapperStyled>
  );
};

export default NavItem;
