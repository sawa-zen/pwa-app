import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import View from './View';
import TabBar from './TabBar';

const TabBarView = (props) => {
  const [current, setCurrent] = useState(props.routes[0].key);
  const handleChange = (key) => {
    setCurrent(key);
  };

  const component = props.renderScene[current];

  return (
    <Wrapper>
      {component}
      <StyledTabBar
        routes={props.routes}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
TabBarView.defaultProps = {
  routes: []
};

const Wrapper = styled(View)`
  padding-bottom: 49px;
  padding-bottom: calc(49px + constant(safe-area-inset-bottom));
  padding-bottom: calc(49px + env(safe-area-inset-bottom));
`;

const StyledTabBar = styled(TabBar)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default TabBarView;
