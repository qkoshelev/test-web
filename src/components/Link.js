import PropTypes from 'prop-types';
import React from 'react';

const Link = ({
  link,
}) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <i className="fa fa-link" aria-hidden="true" />
  </a>
)

Link.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Link;
