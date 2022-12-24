import React, { FC } from 'react';
import { PrivateWrapperStyled } from './Private.styled';
import { PrivateComponentProps } from './Private.props';


const Private: FC<PrivateComponentProps> = () => (
  <PrivateWrapperStyled className='Private' data-testid='Private'>
    Private Component
  </PrivateWrapperStyled>
);

export default Private;
