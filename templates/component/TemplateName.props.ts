import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum TemplateNameType {}

export interface TemplateNameProps {
  types?: TemplateNameType;
  children?: ReactNode;
}

export interface TemplateNameComponentProps
  extends TemplateNameProps,
    ComponentPropsWithoutRef<'div'> {
}