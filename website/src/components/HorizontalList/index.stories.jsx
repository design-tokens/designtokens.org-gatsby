import React from 'react';
import { HorizontalList } from '.';

export default {
  title: 'Components/HorizontalList',
  component: HorizontalList,
};

export const noSpacing = () => (
  <HorizontalList>
    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>
  </HorizontalList>
);

export const base = () => (
  <HorizontalList spacing="base">
    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>
  </HorizontalList>
);

export const small = () => (
  <HorizontalList spacing="small">
    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>
  </HorizontalList>
);

export const medium = () => (
  <HorizontalList spacing="medium">
    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>
  </HorizontalList>
);

export const large = () => (
  <HorizontalList spacing="large">
    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>

    <HorizontalList.Item>List Item</HorizontalList.Item>
  </HorizontalList>
);
