import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Page } from '../../components';
import { setCurrentPage } from '../../router/routerAction';
import { setHighScore } from './gamePageAction';

class GamePage extends React.Component {
  state = {
    status: 'playing',
  };

  render() {
    return (
      <Page>
      </Page>
    );
  }

  _onClickRetry = () => {
    this.setState({
      status: 'playing',
    });
  };
}

const mapDispatchToProps = (dispatch) => ({
  onClickTop: () => {
    dispatch(setCurrentPage('top'));
  },
});

export default connect(null, mapDispatchToProps)(GamePage);
