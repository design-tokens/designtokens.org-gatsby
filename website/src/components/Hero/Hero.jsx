import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Heading } from '../Heading';
import styles from './Hero.module.scss';

const Hero = ({ className, children, heading, description, ...rest }) => {
  const classes = classNames(styles.wrapper, className);

  return (
    <section className={classes} {...rest}>
      {heading !== '' ? <Heading level={1}>{heading}</Heading> : ''}

      {description && (
        <Heading level={4} element="h2">
          {description}
        </Heading>
      )}

      {children}
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  description: PropTypes.string,
};

Hero.defaultProps = {
  heading: '',
  description: '',
};

export { Hero };
