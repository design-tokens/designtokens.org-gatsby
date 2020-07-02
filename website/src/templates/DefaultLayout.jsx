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
import { MediaObject } from '../layout/MediaObject';

import logo from '../images/logo.png';

import styles from './DefaultLayout.module.scss';

const components = {
  pre: ({ children }) => children,
  code: CodeBlock,
};

const DefaultLayout = ({
  pageTitle,
  navigation,
  aside,
  children,
  pageContext,
}) => {
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
      <HolyGrail.Header className={styles.Header}>
        <Grid full largeFit spacing="medium" alignItems="center">
          <Grid.Column role="banner" smallAutoSize>
            <LinkButton to="/">
              <MediaObject alignItems="center">
                <MediaObject.Figure>
                  <img src={logo} width={48} height={48} alt="DTCG Logo" />
                </MediaObject.Figure>

                <MediaObject.Body>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data.site.siteMetadata.title,
                    }}
                  />
                </MediaObject.Body>
              </MediaObject>
            </LinkButton>
          </Grid.Column>

          <Grid.Column element="nav" role="navigation">
            <HorizontalList spacing="small">
              <HorizontalList.Item>
                <LinkButton to="/test/">Test Page</LinkButton>
              </HorizontalList.Item>
            </HorizontalList>
          </Grid.Column>
        </Grid>
      </HolyGrail.Header>

      <HolyGrail.Body>
        <HolyGrail.Content>
          <HolyGrail>
            <HolyGrail.Header>
              <Hero
                heading={
                  pageContext !== ''
                    ? pageContext.frontmatter.title
                    : pageTitle !== ''
                    ? pageTitle
                    : ''
                }
              />
            </HolyGrail.Header>

            <HolyGrail.Body>
              {navigation !== '' ? (
                <HolyGrail.Navigation className={styles.Navigation}>
                  {navigation}
                </HolyGrail.Navigation>
              ) : (
                ''
              )}

              <HolyGrail.Content className={styles.Content}>
                <Container>
                  <main>
                    <MDXProvider components={components}>
                      {children}
                    </MDXProvider>
                  </main>
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

      <HolyGrail.Footer className={styles.Footer}>
        <Grid full largeFit spacing="medium">
          <Grid.Column role="contentinfo">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: data.site.siteMetadata.title,
                }}
              />
            </p>
          </Grid.Column>

          <Grid.Column>
            <HorizontalList spacing="small">
              <HorizontalList.Item>
                <LinkButton href="https://www.w3.org/community/design-tokens/">
                  <abbr title="World Wide Web Consortium">W3C</abbr> Group
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
      </HolyGrail.Footer>
    </HolyGrail>
  );
};

DefaultLayout.propTypes = {
  pageTitle: PropTypes.string,
  pageContext: PropTypes.node,
  mdxTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  navigation: PropTypes.node,
  aside: PropTypes.node,
};

DefaultLayout.defaultProps = {
  pageTitle: '',
  mdxTitle: '',
  navigation: '',
  aside: '',
  pageContext: '',
};

export default DefaultLayout;
