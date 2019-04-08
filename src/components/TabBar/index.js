import * as React from 'react';
import styled from 'styled-components';
import View from '../View';
import TabBarItem from './TabBarItem';

const items = [
  {
    id: 'home',
    icon: 'home',
  },
  {
    id: 'wallet',
    icon: 'wallet',
  },
  {
  id: 'notification',
    icon: 'bell',
  },
  {
    id: 'profile',
    icon: 'user',
  },
];

const TabBar = () => (
  <Wrapper>
    {
      items.map((item) => (
        <TabBarItem icon={item.icon} />
      ))
    }
  </Wrapper>
);

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  height: 49px;
  background: #FFF;
  border-top: 1px solid #CCC;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: initial;
`;

export default TabBar;
