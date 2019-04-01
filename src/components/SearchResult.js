import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';
import Table from './PostsTable';
import { getPostsRequesting } from '../selectors';

const mapDispatchToProps = dispatch => ({
  getPosts: (value) => {
    dispatch(fetchPosts(value));
  },
});

const mapStateToProps = (state) => {
  const postsInfo = getPostsRequesting(state);
  return {
    serverError: postsInfo.serverError,
    requesting: postsInfo.requesting,
    posts: postsInfo.data,
  };
};

class SearchResult extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    requesting: PropTypes.bool,
    serverError: PropTypes.object,
  }

  componentDidMount() {
    const { getPosts, value } = this.props;
    if (value) {
      getPosts(value);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      value,
      getPosts,
    } = this.props;
    if (prevProps.value !== value) {
      getPosts(value);
    }
  }

  render() {
    const {
      posts,
      requesting,
      serverError,
    } = this.props;
    if (requesting) {
      return (
        <div className="message-wrapper">
          Loading...
        </div>
      );
    }
    if (serverError) {
      return (
        <div className="message-wrapper">
          Error while posts loading
        </div>
      );
    }
    if (posts && posts.items) {
      return (
        <div>
          <Table
            data={posts.items}
            className="table-sm table-hover st-table"
          />
        </div>
      );
    }
    return (
      <div className="message-wrapper">
        <p>No results</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
