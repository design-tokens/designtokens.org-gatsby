import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ className, props }) => {
  const classes = classNames(className);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      {...props}
      className={classes}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

Image.propTypes = {
  ...Img.propTypes,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export { Image };
