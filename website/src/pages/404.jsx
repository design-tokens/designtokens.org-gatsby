import React from 'react';

import DefaultLayout from '../templates/DefaultLayout';
import { SEO } from '../components/SEO';

const NotFoundPage = () => (
  <DefaultLayout pageTitle="Page Not found">
    <SEO title="404: Not found" />

    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
);

export default NotFoundPage;
