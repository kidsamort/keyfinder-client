import styled from 'styled-components';
import { PreLoaderProps } from './PreLoader.props';
import { colors } from 'style/helpers.styled';

export const PreLoaderWrapperStyled = styled.div<PreLoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .loader {
    -webkit-animation: loader-turn 1s linear infinite;
    animation: loader-turn 1s linear infinite;
    padding: 1rem;
    max-width: 60px;
    width: 100%;
  }

  @-webkit-keyframes loader-turn {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  @keyframes loader-turn {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }

  .loader__value {
    -webkit-animation: loader-stroke 6s linear infinite;
    animation: loader-stroke 6s linear infinite;
    fill: none;
    stroke-dasharray: 63;
    stroke-dashoffset: 63;
    stroke-linecap: round;
    stroke-width: 4;
  }

  .loader__value:nth-child(1) {
    stroke: ${colors.accents.blue.azure};
  }

  .loader__value:nth-child(2) {
    stroke: ${colors.accents.green.verdepom};
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .loader__value:nth-child(3) {
    stroke: ${colors.accents.red.strawberry};
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  .loader__value:nth-child(4) {
    stroke: ${colors.accents.orange.shiny};
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  .loader__value:nth-child(5) {
    stroke: ${colors.accents.orange.mango};
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }

  .loader__value:nth-child(6) {
    stroke: ${colors.accents.pink.crayola};
    -webkit-animation-delay: 5s;
    animation-delay: 5s;
  }

  @-webkit-keyframes loader-stroke {
    8.3333333333% {
      stroke-dashoffset: 0;
    }
    16.6666666667%, 100% {
      stroke-dashoffset: 63;
    }
  }
  @keyframes loader-stroke {
    8.3333333333% {
      stroke-dashoffset: 0;
    }
    16.6666666667%, 100% {
      stroke-dashoffset: 63;
    }
  }
`;