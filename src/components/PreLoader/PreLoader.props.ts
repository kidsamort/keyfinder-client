import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum PreLoaderType {}

export interface PreLoaderProps {
  types?: PreLoaderType;
  children?: ReactNode;
}

export interface PreLoaderComponentProps
  extends PreLoaderProps,
    ComponentPropsWithoutRef<'div'> {
}