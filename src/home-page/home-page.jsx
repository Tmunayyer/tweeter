import React, { useState } from 'react';

import { Navigation } from '../components/navbar.jsx';

export function HomePage({ user }) {
  const [view, setView] = useState('feed');

  return <Navigation user={user} setView={setView} />;
}
