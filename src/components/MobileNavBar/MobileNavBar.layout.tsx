import { FunctionComponent, ReactNode } from 'react';
import MobileNavBar from 'components/MobileNavBar';

const MobileNavBarLayout = ({ children }: { children: ReactNode, }): JSX.Element => {
  return (
    <MobileNavBar>
      {children}
    </MobileNavBar>
  );
};

export const withMobileNavBarLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withMobileNavBarLayout(props: T): JSX.Element {
    return (
      <MobileNavBarLayout>
        <Component {...props} />
      </MobileNavBarLayout>
    );
  };
};