import React, { useState }  from 'react';
import styled from 'styled-components';
import View from '../View';
import TabBarItem from './TabBarItem';

const TabBar = (props) => {
  const [current, setCurrent] = useState('home');

  const handleClick = (key) => {
    setCurrent(key);
    props.onChange(key);
  }

  return (
    <Wrapper className={props.className}>
      {
        props.routes.map((route) => (
          <TabBarItem
            key={route.key}
            icon={route.icon}
            onClick={() => handleClick(route.key)}
            active={current === route.key}
          />
        ))
      }
    </Wrapper>
  );
}
TabBar.defaultProps = {
  routes: [],
  onChange: () => {},
};

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
