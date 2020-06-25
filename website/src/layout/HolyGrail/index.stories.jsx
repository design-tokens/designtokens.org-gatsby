import React from 'react';
import { HolyGrail } from '.';
import { Example } from '../../example';

export default {
  title: 'Layout/HolyGrail',
  component: HolyGrail,
};

export const base = () => (
  <HolyGrail>
    <HolyGrail.Header>
      <Example text="header" />
    </HolyGrail.Header>

    <HolyGrail.Body>
      <HolyGrail.Navigation>
        <Example text="navigation" />
      </HolyGrail.Navigation>

      <HolyGrail.Content>
        <Example text="content" />
      </HolyGrail.Content>

      <HolyGrail.Aside>
        <Example text="aside" />
      </HolyGrail.Aside>
    </HolyGrail.Body>

    <HolyGrail.Footer>
      <Example text="footer" />
    </HolyGrail.Footer>
  </HolyGrail>
);

export const noHeaderOrFooter = () => (
  <HolyGrail>
    <HolyGrail.Body>
      <HolyGrail.Navigation>
        <Example text="navigation" />
      </HolyGrail.Navigation>

      <HolyGrail.Content>
        <Example text="content" />
      </HolyGrail.Content>

      <HolyGrail.Aside>
        <Example text="aside" />
      </HolyGrail.Aside>
    </HolyGrail.Body>
  </HolyGrail>
);

export const noNavigation = () => (
  <HolyGrail>
    <HolyGrail.Body>
      <HolyGrail.Content>
        <Example text="content" />
      </HolyGrail.Content>

      <HolyGrail.Aside>
        <Example text="aside" />
      </HolyGrail.Aside>
    </HolyGrail.Body>
  </HolyGrail>
);

export const noAside = () => (
  <HolyGrail>
    <HolyGrail.Body>
      <HolyGrail.Navigation>
        <Example text="navigation" />
      </HolyGrail.Navigation>

      <HolyGrail.Content>
        <Example text="content" />
      </HolyGrail.Content>
    </HolyGrail.Body>
  </HolyGrail>
);
