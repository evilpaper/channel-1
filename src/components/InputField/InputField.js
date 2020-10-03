import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  vertical-align: middle;
  font-size: 0.9em;
  padding: 0.6em;
  border-radius: 0.5em;
  outline: 0;
  border: 1px solid hsla(232, 40%, 40%, 0.6);
  border: 1px solid var(--color-light-gray);
  background-color: var(--color-background);
  position: absolute;
  bottom: 0;

  &::placeholder {
    font-family: "Inter", sans-serif;
    color: var(--color-placeholder);
  }

  &:hover {
    border: 1px solid var(--color-border-hover);
  }

  &:focus {
    outline: none;
    border-color: var(--color-border-hover);
  }
`;

export default function InputField({
  handleChange,
  handleSubmit,
  value,
  placeholder,
}) {
  return (
    <StyledInput
      type="text"
      name="name"
      className="Input-field"
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
      placeholder={placeholder}
    ></StyledInput>
  );
}
