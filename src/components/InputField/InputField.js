import React from "react";

export default function InputField({
  handleChange,
  handleSubmit,
  value,
  placeholder,
}) {
  return (
    <input
      type="text"
      name="name"
      className="Input-field"
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
      placeholder={placeholder}
    />
  );
}
