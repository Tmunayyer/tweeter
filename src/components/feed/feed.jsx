import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Base Components
 */
import { Card, CardTitle, CardBody, CardActions } from '../cards.jsx';
import { Button } from '@blueprintjs/core';

/**
 * Utilities
 */
import api from '../../utilities/api.js';

function Feed_ListItem(props) {
  const { twit_id, twit, username } = props.data;

  const handleDelete = async () => {
    try {
      const url = '/api/twits';
      await api.delete(url, { twit_id: twit_id });
    } catch (err) {
      console.log('ERROR: deleting twit...', err);
    }
  };

  const ListItemActions = () => {
    return (
      <div className="twit-card-actions">
        <Button minimal={true} small={true} icon="edit"></Button>
        <Button
          minimal={true}
          small={true}
          icon="delete"
          onClick={handleDelete}
        ></Button>
      </div>
    );
  };
  return (
    <Card>
      <CardTitle>{`@${username} wrote:`}</CardTitle>
      <CardBody>{twit}</CardBody>
      <CardActions>
        <ListItemActions />
      </CardActions>
    </Card>
  );
}

function Feed_ListWrapper(props) {
  const { twitList } = props;

  return twitList.map((twit, index) => {
    return <Feed_ListItem data={twit} index={index} key={twit.id} />;
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

  useEffect(() => {
    fetchList();
  }, []);

  return <Feed_ListWrapper twitList={twitList} />;
}
