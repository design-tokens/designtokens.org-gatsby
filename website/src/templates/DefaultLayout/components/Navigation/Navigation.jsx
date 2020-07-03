import React from 'react';
import classNames from 'classnames';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const classes = classNames(styles.wrapper, open && styles.open);

  return (
    <button type="button" className={classes} onClick={() => setOpen(!open)}>
      {open ? `Close Menu` : `Open Menu`}
    </button>
  );
};

export { Navigation };
