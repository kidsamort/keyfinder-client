import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

export interface NavBarItems {
  icon: ReactElement<any, any>;
  title: string;
}

export interface MobileNavBarProps {
  items?: NavBarItems[];
  children?: ReactNode;
}

export interface MobileNavBarComponentProps
  extends MobileNavBarProps,
    ComponentPropsWithoutRef<'div'> {
}