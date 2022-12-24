import React, { FC } from 'react';
import { AuthWrapperStyled } from './Auth.styled';
import { AuthComponentProps } from './Auth.props';
import { withMobileNavBarLayout } from 'components/MobileNavBar/MobileNavBar.layout';


const Auth: FC<AuthComponentProps> = () => {
  return (
    <AuthWrapperStyled className='Auth' data-testid='Auth'>
      Auth Component
    </AuthWrapperStyled>
  );
};


export default withMobileNavBarLayout(Auth);
