import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from '../templates/DefaultLayout';
import { SEO } from '../components/SEO';

const IndexPage = () => (
  <DefaultLayout
    navigation={
      <>
        <p>
          <Link to="/page-2/">Go to page 2</Link>
        </p>
        <p>
          <Link to="/principles/">Go to the principles page (in MDX)</Link>
        </p>
        <p>
          <Link to="/test/">Load an MDX test page</Link>
        </p>
      </>
    }
    aside={<p>This is an aside.</p>}
  >
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>

    <p>Now go build something great.</p>
  </DefaultLayout>
);

export default IndexPage;
