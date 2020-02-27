import React from 'react';

/**
 * Layout Wrappers
 */
import {
  PageWrapper,
  PageHeader,
  PageMain,
  PageFooter
} from '../components/pages.jsx';

import { Navigation } from '../components/navigation.jsx';

import { Composer } from '../components/composer/composer.jsx';
import { Feed } from '../components/feed/feed.jsx';

import { Provider as HomePage_Provider } from './context.jsx';

export function HomePage({ user }) {
  return (
    <HomePage_Provider>
      <PageWrapper>
        <PageHeader>
          <Navigation />
        </PageHeader>
        <PageMain>
          <Composer />
          <Feed></Feed>
        </PageMain>
        <PageFooter />
      </PageWrapper>
    </HomePage_Provider>
  );
}
