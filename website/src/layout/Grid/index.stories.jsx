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

export const alignItemsFlexStart = () => (
  <Grid alignItems="flex-start">
    <GridExample />
  </Grid>
);

export const alignItemsFlexEnd = () => (
  <Grid alignItems="flex-end">
    <GridExample />
  </Grid>
);

export const alignItemsCenter = () => (
  <Grid alignItems="center">
    <GridExample />
  </Grid>
);

export const alignItemsBaseline = () => (
  <Grid alignItems="baseline">
    <GridExample />
  </Grid>
);

export const alignItemsStretch = () => (
  <Grid alignItems="stretch">
    <GridExample stretch />
  </Grid>
);

export const columnAutoSize = () => (
  <Grid>
    <GridExample autoSize />
  </Grid>
);

export const spacingBase = () => (
  <Grid spacing="base">
    <GridExample />
  </Grid>
);

export const spacingSmall = () => (
  <Grid spacing="small">
    <GridExample />
  </Grid>
);

export const spacingMedium = () => (
  <Grid spacing="medium">
    <GridExample />
  </Grid>
);

export const spacingLarge = () => (
  <Grid spacing="large">
    <GridExample />
  </Grid>
);
