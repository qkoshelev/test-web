import PropTypes from 'prop-types';
import React from 'react';
import decode from 'unescape';

const TitleCell = ({
  title,
}) => {
  const unescapedTitle = decode(title)
  return (
    <div>{unescapedTitle}</div>
  );
};

TitleCell.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleCell;
