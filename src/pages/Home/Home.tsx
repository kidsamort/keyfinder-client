import React, { FC } from 'react';
import { HomeWrapperStyled } from './Home.styled';
import { HomeComponentProps } from './Home.props';


const Home: FC<HomeComponentProps> = () => (
  <HomeWrapperStyled className='Home' data-testid='Home'>
    Home Component
  </HomeWrapperStyled>
);

export default Home;
