import React from 'react';
import { connect } from 'react-redux';
import TopWindow from '../pages/topWindow';
import { setCurrentPage } from './routerAction';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'start': return <TopWindow />;
    default: return <TopWindow />;
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
