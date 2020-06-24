import React from 'react';
import { Container } from '.';
import { Example } from '../../example';

export default {
  title: 'Layout/Container',
  component: Container,
};

export const base = () => (
  <Container>
    <Example />
  </Container>
);
