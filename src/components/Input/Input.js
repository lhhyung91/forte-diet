import React from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from "./Input.styled";

export default function Input({
  name,
  type,
  placeholder,
  id,
  label,
  onChange,
  onBlur,
  errorMessage,
}) {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      ></StyledInput>
      {errorMessage[name] ? (
        <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
      ) : null}
      <StyledErrorMessage></StyledErrorMessage>
    </StyledInputWrapper>
  );
}
