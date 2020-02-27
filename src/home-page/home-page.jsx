/**
 * Modules
 */
import React from 'react';

/**
 * Context
 */
import { Provider as HomePage_Provider } from './context.jsx';

/**
 * Base Components
 */
import {
  PageWrapper,
  PageHeader,
  PageMain,
  PageFooter
} from '../components/pages.jsx';

import { Navigation } from '../components/navigation.jsx';
import { Composer } from './composer.jsx';
import { Feed } from './feed.jsx';

export function HomePage() {
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
