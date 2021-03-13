import { ReactNode } from 'react';


export interface ThemeProps {
  children?: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return <>
    {children}
  </>;
};
