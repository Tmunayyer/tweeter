import React, { useState } from 'react';

/**
 * Layout Wrappers
 */
import {
  PageWrapper,
  PageHeader,
  PageMain,
  PageFooter
} from '../components/pages.jsx';

import { Navigation } from '../components/navbar.jsx';

import { Composer } from '../components/composer/composer.jsx';
import { Feed } from '../components/feed/feed.jsx';

export function HomePage({ user }) {
  const [view, setView] = useState('feed');

  return (
    <PageWrapper>
      <PageHeader>
        <Navigation user={user} setView={setView}></Navigation>
      </PageHeader>
      <PageMain>
        <Composer user={user}></Composer>
        <Feed></Feed>
      </PageMain>
      <PageFooter></PageFooter>
    </PageWrapper>
  );
}
