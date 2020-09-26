import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  vertical-align: middle;
  padding: 0.4em;
  border-radius: 0.5em;
  outline: 0;
  border: 1px solid hsla(232, 40%, 40%, 0.6);
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
