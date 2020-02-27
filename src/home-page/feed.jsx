/**
 * Modules
 */
import React, { useState, useEffect, useContext } from 'react';

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

const ListItemBody = (props) => {
  const { isEditing, twit, newTwit, setNewTwit } = props;

  if (isEditing === false) {
    return <>{twit}</>;
  }

  return (
    <EditableText
      key={'editable_text'}
      className="editable-text-box"
      maxLenght={255}
      value={newTwit}
      multiline={true}
      minLines={3}
      maxLines={12}
      onChange={setNewTwit}
    />
  );
};

const ListItemActions = (props) => {
  const { fetchList } = useContext(HomePage_Context);

  const { isEditing, setEditing, newTwit, setNewTwit } = props;

  const { twit_id, twit } = props.data;

  const handleDelete = async (twit_id) => {
    try {
      const url = '/api/twits';
      await api.delete(url, { twit_id: twit_id });

      fetchList();
    } catch (err) {
      console.log('ERROR: deleting twit...', err);
    }
  };

  const handleUpdate = async (twit_id, twit) => {
    try {
      const url = '/api/twits';
      await api.update(url, { twit_id, twit });

      fetchList();
    } catch (err) {
      console.log('ERROR: updating twit...', err);
    }
  };

  return (
    <div className="twit-card-actions">
      {isEditing && (
        <div className="card-actions-left">
          <Button
            minimal={true}
            small={true}
            text="Cancel"
            onClick={() => {
              setNewTwit(twit);
              setEditing(false);
            }}
          />
          <Button
            small={true}
            text="Submit"
            onClick={() => {
              handleUpdate(twit_id, newTwit);
              setEditing(false);
            }}
          />
        </div>
      )}
      <div className="card-actions-right">
        <Button
          minimal={true}
          small={true}
          icon="edit"
          onClick={() => {
            setEditing(!isEditing);
            setNewTwit(twit);
          }}
        />
        <Button
          minimal={true}
          small={true}
          icon="delete"
          onClick={() => handleDelete(twit_id)}
        />
      </div>
    </div>
  );
};

function Feed_ListItem(props) {
  const [isEditing, setEditing] = useState(false);
  const [newTwit, setNewTwit] = useState();

  const { twit, username } = props.data;

  return (
    <Card elevation={isEditing ? 'FOUR' : false}>
      <CardTitle>{`@${username} wrote:`}</CardTitle>
      <CardBody>
        <ListItemBody
          isEditing={isEditing}
          twit={twit}
          newTwit={newTwit}
          setNewTwit={setNewTwit}
        />
      </CardBody>
      <CardActions>
        <ListItemActions
          isEditing={isEditing}
          setEditing={setEditing}
          newTwit={newTwit}
          setNewTwit={setNewTwit}
          data={props.data}
        />
      </CardActions>
    </Card>
  );
}

function Feed_ListWrapper(props) {
  const { twitList } = props;

  return twitList.map((twit, index) => {
    return <Feed_ListItem data={twit} index={index} key={twit.twit_id} />;
  });
}

export function Feed() {
  const { twitList, fetchList } = useContext(HomePage_Context);

  useEffect(() => {
    fetchList();
  }, []);

  return <Feed_ListWrapper twitList={twitList} />;
}
