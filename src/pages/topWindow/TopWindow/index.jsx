import React from 'react';
import styled from 'styled-components';
import { Window, TabBarView } from '../../../components';
import HomeNavigation from './HomeNavigation';
import WalletNavigation from './WalletNavigation';
import NotificationNavigation from './NotificationNavigation';
import ProfileNavigation from './ProfileNavigation';

const routes = [
  { key: 'home', icon: 'home' },
  { key: 'wallet', icon: 'wallet' },
  { key: 'notification', icon: 'bell' },
  { key: 'profile', icon: 'user' },
];

const TopWindow = (props) => {
  return (
    <Window>
      <TabBarView
        routes={routes}
        renderScene={{
          home: (<HomeNavigation />),
          wallet: (<WalletNavigation />),
          notification: (<NotificationNavigation />),
          profile: (<ProfileNavigation />),
        }}
      />
    </Window>
  );
};

export default TopWindow;
