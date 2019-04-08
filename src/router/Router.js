import React from 'react';
import { connect } from 'react-redux';
import TopPage from '../pages/topPage/TopPage';
import GamePage from '../pages/gamePage/GamePage';
import { setCurrentPage } from './routerAction';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'start': return <TopPage />;
    case 'game': return <GamePage />;
    default: return <TopPage />;
  }
};

const Router = (props) => (
  <>
    { renderPage(props.currentPage) }
  </>
);

const mapStateToProps = (state) => ({
  currentPage: state.router.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
    dispatch(setCurrentPage('score'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
