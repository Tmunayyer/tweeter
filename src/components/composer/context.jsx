/**
 * This is likely overkill for what I was trying to accomplish
 *  but wanted to explore it.
 */

import React, { createContext, useState } from 'react';

const defaultContext = {
  twit: ''
};

export const Context = createContext(defaultContext);

export const Provider = (props) => {
  /**
   * Initial values to set state with
   */
  const { twit: initialTwit, children } = props;

  /**
   * Set up state to make up context
   */
  const [twit, setTwit] = useState(initialTwit);

  /**
   * Logical handlers or extra handlers
   */

  const resetTwit = () => {
    setTwit('');
  };

  const updateTwit = (value) => {
    setTwit(value);
  };

  /**
   * The context object
   */
  const twitContext = {
    twit,
    updateTwit,
    resetTwit
  };

  /**
   * Return the provider with the context and wrap the children
   */
  return <Context.Provider value={twitContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
