import PropTypes from 'prop-types';
import React from 'react';

const YesNoIconCell = ({
  condition,
}) => {
  if (condition) {
    return (
      <i className="fa fa-check-circle-o green" aria-hidden="true" />
    );
  }
  return (
    <i className="fa fa-ban red" aria-hidden="true" />
  );
};

YesNoIconCell.propTypes = {
  condition: PropTypes.bool.isRequired,
};

export default YesNoIconCell;
