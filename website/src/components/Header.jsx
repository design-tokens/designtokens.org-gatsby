import { Link } from 'gatsby';
import React from 'react';
import * as colors from '@dtcg/design-tokens/dist/colors.json';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: colors['Purple 600'],
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
