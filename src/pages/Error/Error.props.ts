import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum ErrorType {}

export interface ErrorProps {
  types?: ErrorType;
  children?: ReactNode;
}

export interface ErrorComponentProps
  extends ErrorProps,
    ComponentPropsWithoutRef<'div'> {
}