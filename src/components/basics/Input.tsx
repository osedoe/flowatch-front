import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;


type InputType = 'password' | 'text'

export interface InputProps {
  label: string;
  type?: InputType;

  onChange: (name: string, newValue: string) => void;
}

export const Input = (props: InputProps) => {
  const { label, type = 'text', onChange } = props;

  const handleOnChange = event => {
    console.log('🍓', event);
    const newValue = event.target.value;
    onChange(label, newValue);
  };

  return <Container>
    <label htmlFor={label}>{label}</label>
    <input name={label} onChange={handleOnChange}/>
  </Container>;
};
