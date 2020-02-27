/**
 * This is likely overkill for what I was trying to accomplish
 *  but wanted to explore it.
 */

import React, { createContext, useState } from 'react';
import api from '../utilities/api.js';

const defaultContext = {
  twit: ''
};

export const Context = createContext(defaultContext);

export const Provider = ({ children }) => {
  /**
   * Set up state to make up context
   */
  const [user, setUser] = useState('JaneDoe'); //hard coded for simplicity
  const [twitList, setTwitList] = useState([]);
  const [view, setView] = useState('general-feed');

  /**
   * Logical or extra handlers
   */
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

  /**
   * The context object
   */
  const homePageContext = {
    //state props
    user,
    view,
    twitList,

    // state handlers
    setUser,
    setView,
    setTwitList,

    // api calls
    fetchList
  };

  /**
   * Return the provider with the context and wrap the children
   */
  return (
    <Context.Provider value={homePageContext}>{children}</Context.Provider>
  );
};

export const { Consumer } = Context;
