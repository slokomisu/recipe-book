import React from 'react'
import { Dimmer, Loader, Container } from 'semantic-ui-react'

const Loading = () => {
  return (
    <Container>
      <Dimmer>
        <Loader size="large">
          Loading
        </Loader>
      </Dimmer>
    </Container>
  )
}

export default Loading