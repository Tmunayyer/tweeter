/**
 * Modules
 */
import React, { useContext } from 'react';
import { Button, EditableText } from '@blueprintjs/core';

/**
 * Base Components
 */
import { Card, CardTitle, CardBody, CardActions } from '../cards.jsx';

/**
 * State/Context
 */
import { Provider } from './context.jsx';
import { Context } from './context.jsx';

import { Context as HomePage_Context } from '../../home-page/context.jsx';

/**
 * Utilities
 */
import api from '../../utilities/api.js';

function Title({ user }) {
  let title = 'Sign in to write a twit!';

  return <div className="card-title">{title}</div>;
}

/**
 * CardBody and CardActions both make use of a context.
 *  This was mostly to explore React contexts that I stumbled upon
 *  while figuring useState and useEffects out.
 */
function Body(props) {
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

function Actions(props) {
  const twitContext = useContext(Context);
  const { fetchList } = useContext(HomePage_Context);

  const { twit, resetTwit } = twitContext;

  const handleSubmit = async () => {
    const url = '/api/twits';

    await api.post(url, { twit: twit });
    resetTwit();
    fetchList();
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

export function Composer(props) {
  return (
    <Provider>
      <Card>
        <CardTitle>
          <Title></Title>
        </CardTitle>
        <CardBody>
          <Body></Body>
        </CardBody>
        <CardActions>
          <Actions></Actions>
        </CardActions>
      </Card>
    </Provider>
  );
}
