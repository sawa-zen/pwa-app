import React from 'react';
import styled from 'styled-components'
import View from './View';
import NavBar from './NavBar';

const NavigationView = (props) => (
  <Wrapper className={props.className}>
    <StyledNavBar
      title={props.title}
    />
    {props.children}
  </Wrapper>
);
NavigationView.defaultProps = {
  className: '',
};

const Wrapper = styled(View)`
  min-height: 300px;
  background: #FFF;
  padding-top: 44px;
  padding-top: calc(44px + constant(safe-area-inset-top));
  padding-top: calc(44px + env(safe-area-inset-top));
`;

const StyledNavBar = styled(NavBar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default NavigationView;
