import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Window from '../Window';
import NavBar from '../NavBar';
import TextButton from '../TextButton';

const constraints = {
  audio: false,
  video: {
    // スマホのバックカメラを使用
    facingMode: 'environment',
    maxFrameRate: 30,
    aspectRatio: 1
  }
};

const CameraView = (props) => {
  const videoRef = useRef(null);
  useEffect(() => {
    try {
      //  カメラの映像を取得
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          window.alert(err.name + ': ' + err.message);
        });
    } catch {
    }
  });

  const [showFlash, setShowFlash] = useState(false);

  const handleReleaseShutter = () => {
    setShowFlash(true);
    // props.onReleaseShutter();
  }

  return (
    <StyledWindow>
      <StyledNavBar
        title="写真"
        leftSide={(
          <TextButton onClick={props.onClickCancel}>キャンセル</TextButton>
        )}
      />
      <CameraPreview
        ref={videoRef}
        autoPlay
        playsInline
      />
      <ShutterButton
        onClick={handleReleaseShutter}
      />
      {
        showFlash && <Flash />
      }
    </StyledWindow>
  );
};

const Flash = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #FFF;
  opacity: 0;
  height: 0%;

  animation: flash 500ms ease;

  @keyframes flash {
    0% { opacity: 0; height: 0%; }
    10% { opacity: 1; height: 100%; }
    99% { opacity: 0; height: 100%; }
    100% { opacity: 0; height: 0%; }
  }
`;

const StyledWindow = styled(Window)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
  background: #FFF;
  justify-content: flex-end;

  animation: slideIn 300ms ease 0s 1 normal;

  @keyframes slideIn {
    0% { opacity: 0; top : 500px; }
    100% { opacity: 1; top: 0; }
  }
`;

const StyledNavBar = styled(NavBar)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const CameraPreview = styled.video`
  position: absolute;
  top: 44px;
  top: calc(44px + constant(safe-area-inset-top));
  top: calc(44px + env(safe-area-inset-top));
  left: 0;
  right: 0;
  padding: 0;
  width: 100%;
`;

const ShutterButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  border: 4px solid #CCC;
  border-radius: 50%;
  transition-duration: 200ms;

  &:active {
    opacity: .5;
  }
`;

export default CameraView;
