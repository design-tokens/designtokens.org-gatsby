import React from 'react';
import { Grid } from '.';
import { GridExample } from './example';

export default {
  title: 'Layout/Grid',
  component: Grid,
};

export const grid = () => (
  <Grid>
    <GridExample />
  </Grid>
);

export const fit = () => (
  <Grid fit>
    <GridExample />
  </Grid>
);

export const full = () => (
  <Grid full>
    <GridExample />
  </Grid>
);

export const divideBy2 = () => (
  <Grid divideBy={2}>
    <GridExample />
  </Grid>
);

export const divideBy3 = () => (
  <Grid divideBy={3}>
    <GridExample />
  </Grid>
);

export const divideBy4 = () => (
  <Grid divideBy={4}>
    <GridExample />
  </Grid>
);

export const itemsFlexStart = () => (
  <Grid alignItems="flex-start">
    <GridExample />
  </Grid>
);

export const itemsFlexEnd = () => (
  <Grid alignItems="flex-end">
    <GridExample />
  </Grid>
);

export const itemsCenter = () => (
  <Grid alignItems="center">
    <GridExample />
  </Grid>
);

export const itemsBaseline = () => (
  <Grid alignItems="baseline">
    <GridExample />
  </Grid>
);

export const itemsStretch = () => (
  <Grid alignItems="stretch">
    <GridExample stretch />
  </Grid>
);

export const columnAutoSize = () => (
  <Grid>
    <GridExample autoSize />
  </Grid>
);

export const spacing = () => (
  <Grid spacing="medium">
    <GridExample />
  </Grid>
);
