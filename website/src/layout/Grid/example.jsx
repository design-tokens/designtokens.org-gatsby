import React from 'react';
import PropTypes from 'prop-types';
import { GridColumn } from './Column';
import { Example } from '../../example';

const GridExample = ({ autoSize, stretch }) => {
  return (
    <>
      <GridColumn autoSize={autoSize}>
        <Example
          stretch={stretch}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </GridColumn>

      <GridColumn>
        <Example
          stretch={stretch}
          text="Sed eleifend, velit vitae pellentesque venenatis, urna mauris pellentesque neque, a venenatis purus sapien sed mauris."
        />
      </GridColumn>

      <GridColumn>
        <Example
          stretch={stretch}
          text="Phasellus eleifend, tortor et ornare lobortis, mi magna interdum ligula, in imperdiet libero tellus eu libero."
        />
      </GridColumn>

      <GridColumn>
        <Example
          stretch={stretch}
          text="Maecenas leo mauris, pellentesque ut pellentesque vitae, molestie non nisl."
        />
      </GridColumn>
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
