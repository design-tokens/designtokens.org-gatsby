import React from 'react';
import { HorizontalList } from '.';
import { HorizontalListItem } from './Item';

export default {
  title: 'Layout/HorizontalList',
  component: HorizontalList,
};

export const noSpacing = () => (
  <HorizontalList>
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const smallSpacing = () => (
  <HorizontalList spacing="small">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const mediumSpacing = () => (
  <HorizontalList spacing="medium">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const largeSpacing = () => (
  <HorizontalList spacing="large">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);
