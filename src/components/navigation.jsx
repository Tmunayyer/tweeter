/**
 * Modules
 */
import React, { useContext } from 'react';

/**
 * Context
 */
import { Context as HomePage_Context } from '../home-page/context.jsx';

/**
 * Blueprint Components
 */
import { Navbar, Alignment } from '@blueprintjs/core';
import { Button } from '@blueprintjs/core';

export function Navigation(props) {
  const { user, setView } = useContext(HomePage_Context);

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
            setView('user-feed');
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
