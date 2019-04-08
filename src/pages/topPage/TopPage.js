import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPage } from '../../router/routerAction';
import { NavBar, Page, Button, TabBar } from '../../components';

const TopScene = (props) => {
  return (
    <Page
      navBar={(<NavBar title="支払い" />)}
      tabBar={(<TabBar />)}
    >
      <StartButton
        icon="qrcode"
        label="QR読み取り"
      />
    </Page>
  );
};

const StartButton = styled(Button)`
  width: 200px;
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopScene);
