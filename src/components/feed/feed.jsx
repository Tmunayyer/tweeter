import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Base Components
 */
import { Card, CardTitle, CardBody, CardActions } from '../cards.jsx';
import { Button, EditableText } from '@blueprintjs/core';

/**
 * Utilities
 */
import api from '../../utilities/api.js';

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
  const {
    isEditing,
    setEditing,
    handleUpdate,
    handleDelete,
    setNewTwit
  } = props;

  const { twit_id, twit } = props.data;

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
          <Button small={true} text="Submit" />
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
  const { handleDelete, handleUpdate } = props;

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
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          isEditing={isEditing}
          setEditing={setEditing}
          setNewTwit={setNewTwit}
          data={props.data}
        />
      </CardActions>
    </Card>
  );
}

function Feed_ListWrapper(props) {
  const { twitList, handleDelete, handleUpdate } = props;

  return twitList.map((twit, index) => {
    return (
      <Feed_ListItem
        data={twit}
        index={index}
        key={twit.twit_id}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
  });
}

export function Feed(props) {
  const [twitList, setTwitList] = useState([]);

  const fetchList = async () => {
    try {
      const url = '/api/twits';
      const { data } = await api.get(url);

      setTwitList(data);
    } catch (err) {
      console.log('ERROR: fetching list...', err);
      setTwitList([]);
    }
  };

  const handleDelete = async (twit_id) => {
    try {
      const url = '/api/twits';
      const response = await api.delete(url, { twit_id: twit_id });

      const filtered_twitList = twitList.filter((twit) => {
        return twit.twit_id !== response.data.data.twit_id;
      });

      setTwitList(filtered_twitList);
    } catch (err) {
      console.log('ERROR: deleting twit...', err);
      setTwitList(twitList);
    }
  };

  const handleUpdate = async (twit_id, twit) => {
    try {
      const url = '/api/twits';
      const response = await api.update(url, { twit_id: twit_id, twit: twit });

      const updated_twitList = [...twitList];

      for (let i = 0; i < twitList.length; i++) {
        const twit = twitList[i];

        if (twit.twit_id === response.data.data.twit_id) {
          const updated_twit = {
            ...twit,
            twit: response.data.data.twit
          };

          twitList[i] = updated_twit;
          break;
        }
      }

      setTwitList(updated_twitList);
    } catch (err) {
      console.log('ERROR: updating twit...', err);
      setTwitList(twitList);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Feed_ListWrapper
      twitList={twitList}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
    />
  );
}
