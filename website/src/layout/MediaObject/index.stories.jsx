import React from 'react';
import { MediaObject } from '.';
import { Example } from '../../example';

export default {
  title: 'Layout/MediaObject',
  component: MediaObject,
};

export const base = () => (
  <MediaObject>
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);

export const reverse = () => (
  <MediaObject reverse>
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);

export const baseSpacing = () => (
  <MediaObject spacing="base">
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);

export const smallSpacing = () => (
  <MediaObject spacing="small">
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);

export const mediumSpacing = () => (
  <MediaObject spacing="medium">
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);

export const largeSpacing = () => (
  <MediaObject spacing="large">
    <MediaObject.Figure>
      <Example text="figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="body" />
    </MediaObject.Body>
  </MediaObject>
);
