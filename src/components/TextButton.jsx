import styled from 'styled-components';
import Text from './Text';

const TextButton = styled(Text)`
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  transition-duration: 200ms;
  padding: 4px 0;

  &:active {
    opacity: .5;
  }
`;

export default TextButton;
