import React from 'react';
import { LinkButton } from '.';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
};

export const internalLink = () => <LinkButton to="/">Internal link</LinkButton>;

export const externalLink = () => (
  <LinkButton href="https://www.google.com/">External link</LinkButton>
);

export const spanForActivePlacement = () => (
  <LinkButton>Span for active placement</LinkButton>
);
