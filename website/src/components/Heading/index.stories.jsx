import React from 'react';
import { Heading } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const H1 = () => <Heading size={1}>Heading 1</Heading>;

export const H2 = () => <Heading size={2}>Heading 2</Heading>;

export const H3 = () => <Heading size={3}>Heading 3</Heading>;

export const H4 = () => <Heading size={4}>Heading 4</Heading>;

export const H5 = () => <Heading size={5}>Heading 5</Heading>;

export const H6 = () => <Heading size={6}>Heading 6</Heading>;

export const H2StyledAsH6 = () => (
  <Heading size={6} element="h2">
    Heading 6
  </Heading>
);
