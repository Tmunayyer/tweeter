/**
 * Modules
 */
import React from 'react';

/**
 * Blueprint Components
 */
import { Navbar, Alignment } from '@blueprintjs/core';

export function Navigation(props) {
  return (
    <Navbar fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Tweeter</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  );
}
