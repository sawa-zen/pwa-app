import * as React from 'react';
import styled from 'styled-components';
import View from '../View';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TabBarItem = (props) => (
  <Wrapper
    active={props.active}
    onClick={props.onClick}
  >
    <FontIcon icon={props.icon || "qrcode"}/>
  </Wrapper>
);
TabBarItem.defaultProps = {
  onClick: () => {},
}

const Wrapper = styled(View)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  opacity: ${props => props.active ? '1' : '.3'};
`;

const FontIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export default TabBarItem;
