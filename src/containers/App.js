import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Explore from '../components/Explore';

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node,
  }

  handleChange = (nextValue) => {
    const {
      history,
    } = this.props;
    history.push(`/${nextValue}`);
  }

  render() {
    const { children, inputValue } = this.props
    return (
      <div>
        <Explore
          value={inputValue}
          onChange={this.handleChange}
        />
        <hr />

        {children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  inputValue: ownProps.location.pathname.substring(1),
})

export default withRouter(connect(mapStateToProps)(App));
