import React, { Component } from 'react'
import { Container, Button, Placeholder } from 'semantic-ui-react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Container>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Container>
    );
  }
}

export default App;
