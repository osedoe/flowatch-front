import React from 'react';


export interface ButtonProps {
  title: string;
}

export const Button = (props: ButtonProps) => {
  const { title } = props;
  return <>
    <button>{title}</button>
  </>;
};
