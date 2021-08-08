import React from "react";
import { Container, Label, InputElement, Error } from "./Input.style";

export const Input = ({
  type,
  placeholder,
  label,
  error,
  handleOnChange,
  value,
  name,
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
