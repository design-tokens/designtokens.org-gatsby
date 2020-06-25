import React from 'react';
import { Hero } from '.';

export default {
  title: 'Components/Hero',
  component: Hero,
};

export const base = () => (
  <Hero heading="Heading" description="Description">
    <p>Children content</p>
  </Hero>
);
