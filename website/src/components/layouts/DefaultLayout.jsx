/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { CodeBlock } from '../CodeBlock';
import { Heading } from '../Heading';
import { Hero } from '../Hero';

import { BreakoutContainer } from '../../layout/BreakoutContainer';
import { Container } from '../../layout/Container';

import * as styles from './DefaultLayout.module.scss';

const components = {
  pre: ({ children }) => children,
  code: CodeBlock,
};

const DefaultLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <BreakoutContainer element="header" className={styles.header}>
        <Container>
          <Heading size={6} element="div" role="banner">
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </Heading>
        </Container>
      </BreakoutContainer>

      <Hero>
        <Heading size={1}>Hero Heading</Heading>

        <p>Hero Subtext</p>
      </Hero>

      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>

      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
