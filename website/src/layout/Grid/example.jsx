import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '.';
import { Example } from '../../example';

const GridExample = ({ autoSize, stretch }) => {
  return (
    <>
      <Grid.Column autoSize={autoSize}>
        <Example
          stretch={stretch}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid.Column>

      <Grid.Column>
        <Example
          stretch={stretch}
          text="Sed eleifend, velit vitae pellentesque venenatis, urna mauris pellentesque neque, a venenatis purus sapien sed mauris."
        />
      </Grid.Column>

      <Grid.Column>
        <Example
          stretch={stretch}
          text="Phasellus eleifend, tortor et ornare lobortis, mi magna interdum ligula, in imperdiet libero tellus eu libero."
        />
      </Grid.Column>

      <Grid.Column>
        <Example
          stretch={stretch}
          text="Maecenas leo mauris, pellentesque ut pellentesque vitae, molestie non nisl."
        />
      </Grid.Column>
    </>
  );
};

GridExample.propTypes = {
  autoSize: PropTypes.bool,
  stretch: PropTypes.bool,
};

GridExample.defaultProps = {
  autoSize: false,
  stretch: false,
};

export { GridExample };
