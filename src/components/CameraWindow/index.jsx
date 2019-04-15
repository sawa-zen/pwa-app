import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Window from '../Window';
import NavBar from '../NavBar';
import View from '../View';
import TextButton from '../TextButton';
import Button from '../Button';
import CameraView from '../CameraView';

const CameraWindow = (props) => {
  const [currentMode, setMode] = useState('camera');
  const [currentImage, setImage] = useState(null);
  return (
    <StyledWindow>
      <NavBar
        title="写真"
        leftSide={(
          <TextButton onClick={props.onClickCancel}>キャンセル</TextButton>
        )}
      />
      <CameraView
        mode={currentMode}
        onChange={image => setImage(image)}
      />
      <BottomSpace>
        {
          currentMode === 'camera' ? (
            <ShutterButton onClick={() => setMode('confirm')} />
          ) : (
            <>
              <Button
                onClick={() => props.onSelect(currentImage)}
                label='この写真を使用する'
              />
              <RetryButton
                onClick={() => setMode('camera')}
              >
                撮りなおす
              </RetryButton>
            </>
          )
        }
      </BottomSpace>
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

const BottomSpace = styled(View)`
  flex: auto;
  align-items: center;
  justify-content: center;
`;

const ShutterButton = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #CCC;
  border-radius: 50%;
  transition-duration: 200ms;

  &:active {
    opacity: .5;
  }
`;

const RetryButton = styled(TextButton)`
  font-size: 16px;
  margin-top: 16px;
  padding: 16px;
`;

export default CameraWindow;
