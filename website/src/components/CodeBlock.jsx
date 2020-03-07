/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
// Code taken from:
// https://github.com/mdx-js/mdx/tree/master/examples/syntax-highlighting

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';

export default ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => `/** @jsx mdx */${code}`}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {(highlight) => (
        <pre
          className={highlight.className}
          style={{ ...highlight.style, padding: '20px' }}
        >
          {highlight.tokens.map((line, i) => (
            <div key={i} {...highlight.getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...highlight.getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
