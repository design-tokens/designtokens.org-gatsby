import React from 'react';
import { HolyGrail } from '.';
import { HolyGrailBody } from './Body';
import { HolyGrailContent } from './Content';
import { HolyGrailNavigation } from './Navigation';
import { HolyGrailAside } from './Aside';
import { Example } from '../../example';

export default {
  title: 'Layout/HolyGrail',
  component: HolyGrail,
};

export const base = () => (
  <HolyGrail>
    <header>
      <Example text="header" />
    </header>

    <HolyGrailBody>
      <HolyGrailNavigation>
        <Example text="navigation" />
      </HolyGrailNavigation>

      <HolyGrailContent>
        <Example text="content" />
      </HolyGrailContent>

      <HolyGrailAside>
        <Example text="aside" />
      </HolyGrailAside>
    </HolyGrailBody>

    <footer>
      <Example text="footer" />
    </footer>
  </HolyGrail>
);

export const spacing = () => (
  <HolyGrail>
    <header>
      <Example text="header" />
    </header>

    <HolyGrailBody spacing="large">
      <HolyGrailNavigation>
        <Example text="navigation" />
      </HolyGrailNavigation>

      <HolyGrailContent>
        <Example text="content" />
      </HolyGrailContent>

      <HolyGrailAside>
        <Example text="aside" />
      </HolyGrailAside>
    </HolyGrailBody>

    <footer>
      <Example text="footer" />
    </footer>
  </HolyGrail>
);

export const noHeaderOrFooter = () => (
  <HolyGrail>
    <HolyGrailBody>
      <HolyGrailNavigation>
        <Example text="navigation" />
      </HolyGrailNavigation>

      <HolyGrailContent>
        <Example text="content" />
      </HolyGrailContent>

      <HolyGrailAside>
        <Example text="aside" />
      </HolyGrailAside>
    </HolyGrailBody>
  </HolyGrail>
);

export const noNavigation = () => (
  <HolyGrail>
    <HolyGrailBody>
      <HolyGrailContent>
        <Example text="content" />
      </HolyGrailContent>

      <HolyGrailAside>
        <Example text="aside" />
      </HolyGrailAside>
    </HolyGrailBody>
  </HolyGrail>
);

export const noAside = () => (
  <HolyGrail>
    <HolyGrailBody>
      <HolyGrailNavigation>
        <Example text="navigation" />
      </HolyGrailNavigation>

      <HolyGrailContent>
        <Example text="content" />
      </HolyGrailContent>
    </HolyGrailBody>
  </HolyGrail>
);
