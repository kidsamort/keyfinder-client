import React from 'react';
import { MobileNavBarWrapperStyled } from './MobileNavBar.styled';
import { MobileNavBarComponentProps } from './MobileNavBar.props';
import NavItem from 'components/MobileNavBar/NavItem';


const MobileNavBar = ({ items, children }: MobileNavBarComponentProps): JSX.Element => {
  return (
    <>
      {children}
      <MobileNavBarWrapperStyled className='MobileNavBar' data-testid='MobileNavBar'>
        {items?.map((item, index) => <NavItem key={index} icon={item.icon}>{item.title}</NavItem>)}
      </MobileNavBarWrapperStyled>
    </>
  );
};

export default MobileNavBar;
