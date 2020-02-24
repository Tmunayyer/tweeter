import React from 'react';

/**
 * Blueprint Components
 */
import { Navbar, Alignment } from '@blueprintjs/core';

export class App extends React.PureComponent {
  render() {
    return (
      <Navbar fixedToTop={true}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Your App here</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
    );
  }
}
