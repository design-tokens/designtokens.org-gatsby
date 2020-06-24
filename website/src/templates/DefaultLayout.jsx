/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';

import { CodeBlock } from '../components/CodeBlock';
import { Hero } from '../components/Hero';
import { HorizontalList } from '../components/HorizontalList';
import { LinkButton } from '../components/LinkButton';

import { Container } from '../layout/Container';
import { Grid } from '../layout/Grid';
import { HolyGrail } from '../layout/HolyGrail';

import * as styles from './DefaultLayout.module.scss';

const components = {
  pre: ({ children }) => children,
  code: CodeBlock,
};

const DefaultLayout = ({ navigation, aside, children }) => {
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
    <HolyGrail>
      <header className={styles.Header}>
        <Grid spacing="medium">
          <Grid.Column role="banner">
            <LinkButton to="/">{data.site.siteMetadata.title}</LinkButton>
          </Grid.Column>

          <Grid.Column element="nav" role="navigation">
            <HorizontalList spacing="small">
              <HorizontalList.Item>
                <LinkButton to="/principles/">Principles</LinkButton>
              </HorizontalList.Item>
            </HorizontalList>
          </Grid.Column>
        </Grid>
      </header>

      <HolyGrail.Body>
        <HolyGrail.Content>
          <HolyGrail>
            <Hero heading="Lorem Ipsum" />

            <HolyGrail.Body>
              {navigation !== '' ? (
                <HolyGrail.Navigation className={styles.Navigation}>
                  {navigation}
                </HolyGrail.Navigation>
              ) : (
                ''
              )}

              <HolyGrail.Content>
                <Container>
                  <div className={styles.Body}>
                    <MDXProvider components={components}>
                      {children}
                    </MDXProvider>
                  </div>
                </Container>
              </HolyGrail.Content>
            </HolyGrail.Body>
          </HolyGrail>
        </HolyGrail.Content>

        {aside !== '' ? (
          <HolyGrail.Aside className={styles.Aside}>{aside}</HolyGrail.Aside>
        ) : (
          ''
        )}
      </HolyGrail.Body>

      <footer className={styles.Footer}>
        <Grid spacing="medium">
          <Grid.Column role="contentinfo">
            <p>
              &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
            </p>
          </Grid.Column>

          <Grid.Column>
            <HorizontalList spacing="small">
              <HorizontalList.Item>
                <LinkButton href="https://www.w3.org/community/design-tokens/">
                  W3C Group
                </LinkButton>
              </HorizontalList.Item>

              <HorizontalList.Item>
                <LinkButton href="https://github.com/design-tokens/">
                  GitHub
                </LinkButton>
              </HorizontalList.Item>

              <HorizontalList.Item>
                <LinkButton href="https://twitter.com/DesignTokens">
                  Twitter
                </LinkButton>
              </HorizontalList.Item>
            </HorizontalList>
          </Grid.Column>
        </Grid>
      </footer>
    </HolyGrail>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.node,
  aside: PropTypes.node,
};

DefaultLayout.defaultProps = {
  navigation: '',
  aside: '',
};

export default DefaultLayout;
