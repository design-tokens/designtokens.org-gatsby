import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.wrapper}>
    <div className={styles.inner}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export { Header };
