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
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const reverse = () => (
  <MediaObject reverse>
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const alignItemsFlexStart = () => (
  <MediaObject alignItems="flex-start">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const alignItemsFlexEnd = () => (
  <MediaObject alignItems="flex-end">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const alignItemsCenter = () => (
  <MediaObject alignItems="center">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const alignItemsBaseline = () => (
  <MediaObject alignItems="baseline">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const alignItemsStretch = () => (
  <MediaObject alignItems="stretch">
    <MediaObject.Figure>
      <Example text="Figure" stretch />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" stretch />
    </MediaObject.Body>
  </MediaObject>
);

export const spacingBase = () => (
  <MediaObject spacing="base">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const spacingSmall = () => (
  <MediaObject spacing="small">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const spacingMedium = () => (
  <MediaObject spacing="medium">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);

export const spacingLarge = () => (
  <MediaObject spacing="large">
    <MediaObject.Figure>
      <Example text="Figure" />
    </MediaObject.Figure>

    <MediaObject.Body>
      <Example text="Body" />
    </MediaObject.Body>
  </MediaObject>
);
