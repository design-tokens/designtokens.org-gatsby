import React from 'react';
import PropTypes from 'prop-types';
import { BreakoutContainer } from '../../layout/BreakoutContainer';
import { Container } from '../../layout/Container';
import * as styles from './Hero.module.scss';

const Hero = ({ element, className, children, ...rest }) => {
  const ClassNames = className !== '' ? ` ${className}` : '';

  return (
    <BreakoutContainer
      element={element}
      className={`${styles.wrapper}${ClassNames}`}
      {...rest}
    >
      <Container>{children}</Container>
    </BreakoutContainer>
  );
};

Hero.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Hero.defaultProps = {
  element: 'section',
  className: '',
};

export { Hero };
