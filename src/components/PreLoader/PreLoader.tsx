import React, { FC } from 'react';
import { PreLoaderWrapperStyled } from './PreLoader.styled';
import { PreLoaderComponentProps } from './PreLoader.props';


const PreLoader: FC<PreLoaderComponentProps> = () => (
  <PreLoaderWrapperStyled className='PreLoader' data-testid='PreLoader'>
    <svg className='loader' viewBox='0 0 24 24'>
      <circle className='loader__value' cx='12' cy='12' r='10' />
      <circle className='loader__value' cx='12' cy='12' r='10' />
      <circle className='loader__value' cx='12' cy='12' r='10' />
      <circle className='loader__value' cx='12' cy='12' r='10' />
      <circle className='loader__value' cx='12' cy='12' r='10' />
      <circle className='loader__value' cx='12' cy='12' r='10' />
    </svg>
  </PreLoaderWrapperStyled>
);

export default PreLoader;
