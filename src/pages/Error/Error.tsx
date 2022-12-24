import React, { FC } from 'react';
import { ErrorWrapperStyled } from './Error.styled';
import { ErrorComponentProps } from './Error.props';


const Error: FC<ErrorComponentProps> = () => (
  <ErrorWrapperStyled className='Error' data-testid='Error'>
    Error Component
  </ErrorWrapperStyled>
);

export default Error;
