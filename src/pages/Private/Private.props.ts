import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum PrivateType {}

export interface PrivateProps {
  types?: PrivateType;
  children?: ReactNode;
}

export interface PrivateComponentProps
  extends PrivateProps,
    ComponentPropsWithoutRef<'div'> {
}