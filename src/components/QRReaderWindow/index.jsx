import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Window from '../Window';
import NavBar from '../NavBar';
import View from '../View';
import TextButton from '../TextButton';
import Button from '../Button';
import QRReaderView from '../QRReaderView';

const QRReaderWindow = (props) => {
  return (
    <StyledWindow>
      <NavBar
        title="QR読み取り"
        leftSide={(
          <TextButton onClick={props.onClickCancel}>キャンセル</TextButton>
        )}
      />
      <QRReaderView
        onRead={() => {}}
      />
    </StyledWindow>
  );
};

const StyledWindow = styled(Window)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: #FFF;
  z-index: 100;
  padding-top: 0;
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);

  animation: slideIn 300ms ease 0s 1 normal;

  @keyframes slideIn {
    0% { opacity: 0; top : 500px; }
    100% { opacity: 1; top: 0; }
  }
`;

export default QRReaderWindow;
