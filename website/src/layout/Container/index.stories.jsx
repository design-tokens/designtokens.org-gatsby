import React from 'react';
import { Container } from '.';
import { Example } from '../../design-system/examples/basic';

export default {
  title: 'Layout/Container',
  component: Container,
};

export const base = () => (
  <Container>
    <Example text="container" />
  </Container>
);
