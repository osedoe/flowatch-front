import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDelayInputCollapse } from '../../hooks/useDelayInputCollapse';

// TODO: Add style + animation
// TODO: Add tests
// TODO: Add focus on input when clicking on label

interface LabelProps {
  shouldShrink: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-secondary);
  margin: 6px 0;
`;

const Label = styled.label<LabelProps>`
  font-size: ${props => props.shouldShrink ? '16px' : '10px'};
`;

const NativeInput = styled.input`
  padding: 6px;
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

  const handleCollapse = (event) => {
    event.stopPropagation();
    setShowInput(prevState => !prevState);
  };

  const handleOnChange = ({ target: { value } }) => onChange(label, value);

  return <Container>
    <Label shouldShrink={!showInput} htmlFor={label} onClick={handleCollapse}>{parsedLabel}</Label>
    {showInput &&
    <NativeInput ref={inputRef} name={label} type={type} onChange={handleOnChange} onBlur={handleCollapse}/>
    }
  </Container>;
};
