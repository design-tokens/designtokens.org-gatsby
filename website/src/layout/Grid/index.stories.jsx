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

export const divideBy1 = () => (
  <Grid divideBy={1}>
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
