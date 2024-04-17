import Spinner from 'react-bootstrap/Spinner'

import React from 'react'

const Loader = () => {
  return (
    <Spinner
    animation="Border"
    role="status"
    style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
    }}

    >
    </Spinner>
  )
}

export default Loader;