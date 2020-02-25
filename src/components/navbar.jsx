import React, { useState } from 'react';

/**
 * Blueprint Components
 */
import { Navbar, Alignment } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core';

export function Navigation({ user, setView }) {
  return (
    <Navbar fixedToTop={true}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Tweeter</Navbar.Heading>
        <Navbar.Divider />
        <Button
          className="bp3-minimal"
          icon="feed"
          text="Feed"
          onClick={() => {
            setView('feed');
          }}
        />
        <Button
          className="bp3-minimal"
          icon="user"
          text="Your Twits"
          onClick={() => {
            if (user === 'guest') {
              // TODO show popup asking to sign in
            } else {
              setView(user);
            }
          }}
        />
      </Navbar.Group>
    </Navbar>
  );
}
