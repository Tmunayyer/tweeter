import React, { useState } from 'react';

import { HomePage } from './home-page/home-page.jsx';

export function App() {
  /**
   * For a bigger application we might have a more indepth apprach
   *  to setting a user. For this, well set it at the app level so its
   *  available to everywhere
   */
  const [user, setUser] = useState('guest');

  return <HomePage user={user} />;
}
