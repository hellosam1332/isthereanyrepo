import { InputHTMLAttributes, useState } from 'react';
import styled from '@emotion/styled';

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function InputKeyword({ ...props }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <Label>
      <Input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        isFocused={focused}
        {...props}
      />
    </Label>
  );
}

const Label = styled.label`
  width: 100%;
`;

const Input = styled.input<{ isFocused: boolean }>`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
  border: 2px solid ${({ isFocused }) => (isFocused ? `#3a8fe9` : `#ccc`)};
`;
