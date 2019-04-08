import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Page from '../../components/Page';
import PrimaryButton from '../../components/PrimaryButton';
import { setCurrentPage } from '../../router/routerAction';
import { setHighScore } from './gamePageAction';

const GameOver = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const GameOverTitle = styled.h1`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  text-align: center;
  font-size: 48px;
`;

const TopButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 130px;
  margin: auto;
  width: 200px;
`;

const RetryButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

class GamePage extends React.Component {
  state = {
    status: 'playing',
  };

  render() {
    return (
      <Page>
        {
          this.state.status === 'gameover' && (
            <GameOver>
              <GameOverTitle>
                GAME OVER
              </GameOverTitle>
              <TopButton
                label="TOP"
                onClick={this.props.onClickTop}
              />
              <RetryButton
                label="RETRY"
                onClick={this._onClickRetry}
              />
            </GameOver>
          )
        }
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
