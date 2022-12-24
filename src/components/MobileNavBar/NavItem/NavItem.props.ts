import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';


export interface NavItemProps {
  icon: ReactElement<any, any>;
  children?: ReactNode;
}

export interface NavItemComponentProps
  extends NavItemProps,
    ComponentPropsWithoutRef<'div'> {
}