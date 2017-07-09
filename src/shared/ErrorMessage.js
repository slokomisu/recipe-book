import React from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ErrorMessage = ({header, body}) => (
  <Message negative>
    <Message.Header>{header}</Message.Header>
    {body}
  </Message>
)

ErrorMessage.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default ErrorMessage