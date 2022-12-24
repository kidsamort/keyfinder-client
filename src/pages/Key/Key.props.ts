import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum KeyType {}

export interface KeyProps {
  types?: KeyType;
  children?: ReactNode;
}

export interface KeyComponentProps
  extends KeyProps,
    ComponentPropsWithoutRef<'div'> {
}