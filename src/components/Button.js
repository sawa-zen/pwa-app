import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => (
  <Wrapper
    onTouchStart={props.onTouchStart}
  >
    {props.icon && (<FontIcon icon={props.icon} />)}
    {props.label}
  </Wrapper>
);
Button.defaultProps = {
  className: '',
  icon: '',
  label: 'ボタン',
  onTouchStart: () => {},
};

const Wrapper = styled.div`
  height: 57px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  user-select: none;
  background: linear-gradient(135deg, #007bff 0%,#42c9ff 100%);
  padding: 0 36px;
  cursor: pointer;
  transition-duration: 200ms;

  &:active {
    opacity: .5;
  }
`;

const FontIcon = styled(FontAwesomeIcon)`
  margin-right: 9px;
  font-size: 18px;
  line-height: 19px;
`;

export default Button;
