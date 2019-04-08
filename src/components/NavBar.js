import * as React from 'react';
import styled from 'styled-components';
import View from './View';
import Text from './Text';

const NavBar = (props) => (
  <Wrapper>
    <Title>
      {props.title || NavBar}
    </Title>
  </Wrapper>
);

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-bottom: 1px solid #CCC;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  background: #FFF;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

export default NavBar;
