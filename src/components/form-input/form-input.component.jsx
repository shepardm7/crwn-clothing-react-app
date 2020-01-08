import React from 'react';

import { FormGroupContainer, StyledFormInput, StyledFormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroupContainer>
    <StyledFormInput type="text" onChange={handleChange} {...otherProps} />
    {label ? (
      <StyledFormInputLabel shouldShrink={otherProps.value.length}>{label}</StyledFormInputLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
