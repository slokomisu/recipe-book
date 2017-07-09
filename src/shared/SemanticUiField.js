import React from 'react'
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'semantic-ui-react'

export default function SemanticUiField ({ input, label, meta: { touched, error, warning }, as: As = Input, ...props}) {
  function handleChange (e, { value }) {
    return input.onChange(value)
  }
  return (
    <Form.Field>
      <label>{label}</label>
      <As {...input} value={input.value} {...props} onChange={handleChange} error={touched && error} />
      {touched && (warning && <span>{warning}</span>)}
    </Form.Field>
  )
}

SemanticUiField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.any
}