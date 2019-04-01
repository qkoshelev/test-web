import PropTypes from 'prop-types';
import React from 'react';

const DateCell = ({
  timestamp,
}) => {
  if (isNaN(timestamp)) {
    return (
      <div>No date</div>
    );
  }
  const date = new Date(timestamp * 1000).toDateString();
  return (
    <div>{date}</div>
  );
};

DateCell.propTypes = {
  timestamp: PropTypes.number.isRequired,
};

export default DateCell;
