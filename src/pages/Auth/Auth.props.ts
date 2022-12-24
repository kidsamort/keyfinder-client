import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum AuthType {}

export interface AuthProps {
  types?: AuthType;
  children?: ReactNode;
}

export interface AuthComponentProps
  extends AuthProps,
    ComponentPropsWithoutRef<'div'> {
}