import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum HomeType {}

export interface HomeProps {
  types?: HomeType;
  children?: ReactNode;
}

export interface HomeComponentProps
  extends HomeProps,
    ComponentPropsWithoutRef<'div'> {
}