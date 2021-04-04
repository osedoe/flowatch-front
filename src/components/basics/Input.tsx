import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDelayInputCollapse } from '../../hooks/useDelayInputCollapse';

// TODO: Add style + animation
// TODO: Add tests
// TODO: Add focus on input when clicking on label

interface StyledProps {
  shouldHideLabel: boolean;
}

const Container = styled.div`
  font-family: var(--font-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 6px 0;
  height: 40px;
`;

const Label = styled.label<StyledProps>`
  font-size: ${props => props.shouldHideLabel ? '16px' : '10px'};
  margin: 6px 0 3px;

  &:hover {
    color: var(--electric-blue);
    cursor: ${props => props.shouldHideLabel ? 'pointer' : 'default'};
  }
`;

const NativeInput = styled.input`
  background-color: var(--primary-light);
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid var(--primary-dark);
  color: var(--dirty-white);
  height: 30px;
  padding: 6px;
  margin: 0 0 6px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1pt var(--electric-blue);
  }
`;

type InputType = 'password' | 'text';

export interface InputProps {
  label: string;
  type?: InputType;

  onChange: (name: string, newValue: string) => void;
}

function parseLabel(label: string): string {
  const firstLetter = label[0];
  const withCapitalLetter = label.replace(/^./, firstLetter.toUpperCase());
  return `${withCapitalLetter}:`;
}

export const Input = (props: InputProps) => {
  const { label, type = 'text', onChange } = props;
  const parsedLabel = parseLabel(label);

  const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);
  useDelayInputCollapse(setShowInput, inputRef);

  const handleCollapse = () => {
    setShowInput(prevState => !prevState);
    setTimeout(() => inputRef.current?.focus(), 1);
  };

  const handleOnChange = ({ target: { value } }) => onChange(label, value);

  return <Container>
    <Label shouldHideLabel={!showInput} htmlFor={label} onClick={handleCollapse}>{parsedLabel}</Label>
    {showInput && <NativeInput ref={inputRef} name={label} type={type} onChange={handleOnChange} onBlur={handleCollapse}/>}
  </Container>;
};
