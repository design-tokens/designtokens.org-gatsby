import React from 'react';
import { Heading } from '../components/Heading';

import DefaultLayout from '../templates/DefaultLayout';
import { SEO } from '../templates/SEO';

const IndexPage = () => (
  <DefaultLayout
    pageTitle={(
      <span
        dangerouslySetInnerHTML={{
          __html:
            'About <abbr title="Design Tokens Community Group">DTCG</abbr>',
        }}
      />
    )}
  >
    <SEO title="Home" />

    <Heading>Principles</Heading>

    <Heading level={3}>1. Inclusive</Heading>

    <p>
      Allow anyone to become familiar with design tokens. Empower people, no
      matter what their skills and tool choices are, as they develop new mental
      models, acquire skills, and implement tools to scale design in their
      projects. Everyone is welcome to join the conversation and share use-cases
      with the community.
    </p>

    <Heading level={3}>2. Focused, yet extensible</Heading>

    <p>
      Stay focused on the smallest surface area necessary to cover the most
      commonly referenced use-cases. Be a platform that opens the door to a wide
      range of possibilities. This small footprint helps maintain simplicity
      with zero dependencies. Extensibility allows the community to incubate new
      ideas that will define the future of design tokens.
    </p>

    <Heading level={3}>3. Stable</Heading>

    <p>
      Provide a stable foundation that users and tool makers can put in place
      and depend on in the long term. For example, by using existing and trusted
      standards (unless conflicting with the two first principles).
    </p>
  </DefaultLayout>
);

export default IndexPage;
