/**
 * Modules
 */
import React, { useContext } from 'react';
import { Button, Card, Elevation, EditableText } from '@blueprintjs/core';

/**
 * State/Context
 */
import { Provider } from './context.jsx';
import { Context } from './context.jsx';

/**
 * Utilities
 */
import api from '../../utilities/api.js';

/**
 * Just here for styling and page positioning
 */
function ComposerContainer({ children }) {
  return <div className="composer-container">{children}</div>;
}

function CardTitle({ user }) {
  let title = 'Sign in to write a twit!';

  return <div className="card-title">{title}</div>;
}

/**
 * EditableTextBox and CardButton both make use of a context.
 *  This was mostly to explore React contexts that I stumbled upon
 *  while figuring useState and useEffects out.
 */
function EditableTextBox(props) {
  const twitContext = useContext(Context);

  const { twit, updateTwit } = twitContext;

  //   const disabled = user === 'guest' ? true : false;
  // TODO uncomment above line
  const disabled = false;

  return (
    <EditableText
      className="editable-text-box"
      maxLenght={255}
      value={twit}
      placeholder="Tell the world whats on your mind..."
      multiline={true}
      minLines={3}
      maxLines={12}
      onChange={updateTwit}
      disabled={disabled}
    >
      {twit}
    </EditableText>
  );
}

function CardButton(props) {
  const twitContext = useContext(Context);

  const { twit, resetTwit } = twitContext;

  const handleSubmit = async () => {
    const url = '/api/twits';

    api.post(url, { twit: twit });
    resetTwit();
  };

  return (
    <Button
      className="card-button"
      small={true}
      text="Submit"
      onClick={handleSubmit}
    />
  );
}

export function Composer({ user }) {
  return (
    <ComposerContainer>
      <Card className="card" interactive={false} elevation={Elevation.TWO}>
        <Provider>
          <CardTitle user={user} />
          <EditableTextBox user={user} />
          <CardButton user={user} />
        </Provider>
      </Card>
    </ComposerContainer>
  );
}
