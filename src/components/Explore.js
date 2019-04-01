import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResult from './SearchResult';

class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    requesting: PropTypes.bool,
    serverError: PropTypes.object,
  }

  handleSearchClick = () => {
    this.props.onChange(this.input.value);
  }

  render() {
    const {
      value,
    } = this.props;

    return (
      <div>
        <div className="justify-center head-wrapper">
          <input
            size="60"
            ref={(input) => this.input = input}
            defaultValue={value}
          />
          <button onClick={this.handleSearchClick}>
            find
          </button>
        </div>
        <SearchResult
          value={value}
          className="table-sm table-hover st-table"
        />
      </div>
    );
  }
}

export default Explore;
