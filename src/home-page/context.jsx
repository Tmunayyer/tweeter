/**
 * Modules
 */
import React, { createContext, useState } from 'react';

/**
 * Utilities
 */
import api from '../utilities/api.js';

const defaultContext = {
  user: false,
  twitList: [],
  view: 'general-feed'
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
      const twits = await api.get(url);

      setTwitList(twits);
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
