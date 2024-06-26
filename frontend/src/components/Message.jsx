import React, { Children } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children}) => {
  return (
    <Alert variant={variant}>
        {Children}
    </Alert>
  )
}

Message.defaultProps = {
    variant: 'Hello',
};

export default Message