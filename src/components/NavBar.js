import * as React from 'react';
import styled from 'styled-components';
import View from './View';
import Text from './Text';

const NavBar = (props) => (
  <Wrapper className={props.className}>
    <LeftSide>
      {props.leftSide}
    </LeftSide>
    <Title>
      {props.title || 'NavBar'}
    </Title>
    <RightSide>
      {' '}
    </RightSide>
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

const LeftSide = styled(View)`
  width: 100px;
  padding-left: 16px;
`;

const Title = styled(Text)`
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const RightSide = styled(View)`
  width: 100px;
  padding-right: 16px;
`;

export default NavBar;
