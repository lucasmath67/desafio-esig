import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Form   } from "react-bootstrap";
export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
      <Form.Control
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'form-control is-invalid' : ''}
        {...rest}
      />
      { error && <span className="error" style={{color:"red",display:"flex" }}>{error}</span> }
    </>
  );
}