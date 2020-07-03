/* eslint-disable react/no-array-index-key */
// Code taken from:
// https://github.com/mdx-js/mdx/tree/master/examples/syntax-highlighting

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import styles from './CodeBlock.module.scss';

const CodeBlock = ({ children, className, live, render }) => {
  const classes = classNames(styles.wrapper, className);
  const language = className?.replace(/language-/, '') || '';

  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={(code) => `/** @jsx mdx */${code}`}
        scope={{ mdx }}
      >
        <LivePreview />

        <div className={classes}>
          <LiveEditor />
        </div>

        <LiveError />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <LiveProvider code={children.trim()}>
        <LivePreview />
      </LiveProvider>
    );
  }

  return (
    <div className={classes}>
      <Highlight {...defaultProps} code={children.trim()} language={language}>
        {(highlight) => (
          <pre className={highlight.className} style={{ ...highlight.style }}>
            {highlight.tokens.map((line, i) => (
              <div key={i} {...highlight.getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...highlight.getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  live: PropTypes.bool,
  render: PropTypes.bool,
};

CodeBlock.defaultProps = {
  className: null,
  live: false,
  render: false,
};

export { CodeBlock };
