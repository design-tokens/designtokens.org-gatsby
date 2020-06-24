import React from 'react';
import { HorizontalList } from '.';
import { HorizontalListItem } from './Item';

export default {
  title: 'Components/HorizontalList',
  component: HorizontalList,
};

export const noSpacing = () => (
  <HorizontalList>
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const base = () => (
  <HorizontalList spacing="base">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const small = () => (
  <HorizontalList spacing="small">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const medium = () => (
  <HorizontalList spacing="medium">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);

export const large = () => (
  <HorizontalList spacing="large">
    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>

    <HorizontalListItem>List Item</HorizontalListItem>
  </HorizontalList>
);
