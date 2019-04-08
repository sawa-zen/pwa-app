import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPage } from '../../router/routerAction';
import Page from '../../components/Page';
import PrimaryButton from '../../components/PrimaryButton';

const StartButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

const TopScene = (props) => {
  const sec = ('000' + Math.floor(props.highScore / 60)).slice(-3);
  const msec = ('00' + props.highScore % 60).slice(-2);
  const time = `${sec}.${msec}`;

  return (
    <Page>
      <StartButton
        label="START"
        onClick={props.onClickStart}
      />
    </Page>
  );
};

const mapStateToProps = (state) => ({
  highScore: state.gamePage.highScore,
});

const mapDispatchToProps = (dispatch) => ({
  onClickStart: () => {
    dispatch(setCurrentPage('game'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopScene);
