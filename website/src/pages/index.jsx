import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from '../components/layouts/DefaultLayout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/principles/">Go to the principles page (in MDX)</Link>
    </p>
    <p>
      <Link to="/test/">Load an MDX test page</Link>
    </p>
  </DefaultLayout>
);

export default IndexPage;
