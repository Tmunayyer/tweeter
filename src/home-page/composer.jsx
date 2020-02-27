/**
 * Modules
 */
import React, { useState, useContext } from 'react';

/**
 * Context
 */
import { Context as HomePage_Context } from './context.jsx';

/**
 * Base Components
 */
import {
  Card,
  CardTitle,
  CardBody,
  CardActions
} from '../components/cards.jsx';
import { Button, EditableText } from '@blueprintjs/core';

/**
 * Utilities
 */
import api from '../utilities/api.js';

function Title() {
  const { user } = useContext(HomePage_Context);
  let title = 'Please Sign in to Twit!';

  if (user) {
    title = `@${user} says:`;
  }

  return <div className="card-title">{title}</div>;
}

function Body(props) {
  const { user } = useContext(HomePage_Context);
  const { twit, setTwit } = props;

  const disabled = user ? false : true;

  return (
    <EditableText
      className="editable-text-box"
      maxLenght={255}
      value={twit}
      placeholder="Tell the world whats on your mind..."
      multiline={true}
      minLines={3}
      maxLines={12}
      onChange={setTwit}
      disabled={disabled}
    />
  );
}

function Actions(props) {
  const { fetchList } = useContext(HomePage_Context);
  const { twit, setTwit } = props;

  const handleSubmit = async () => {
    const url = '/api/twits';

    await api.post(url, { twit: twit });
    setTwit('');
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

export function Composer() {
  const [twit, setTwit] = useState('');

  return (
    <Card>
      <CardTitle>
        <Title></Title>
      </CardTitle>
      <CardBody>
        <Body twit={twit} setTwit={setTwit}></Body>
      </CardBody>
      <CardActions>
        <Actions twit={twit} setTwit={setTwit}></Actions>
      </CardActions>
    </Card>
  );
}
