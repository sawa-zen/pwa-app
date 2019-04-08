import * as React from 'react';
import styled from 'styled-components';
import View from '../View';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TabBarItem = (props) => (
  <Wrapper
    onTouchStart={props.onTouchStart}
  >
    <FontIcon icon={props.icon || "qrcode"}/>
  </Wrapper>
);

const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  opacity: .3;
`;

const FontIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
`;

export default TabBarItem;
