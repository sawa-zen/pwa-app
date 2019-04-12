import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Window from '../Window';
import NavBar from '../NavBar';
import View from '../View';
import TextButton from '../TextButton';

const constraints = {
  audio: false,
  video: {
    // スマホのバックカメラを使用
    facingMode: 'environment',
    maxFrameRate: 30,
  }
};

const CameraView = (props) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {
    let videoStream;
    try {
      //  カメラの映像を取得
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream) => {
          videoStream = stream;
          videoRef.current.srcObject = videoStream;
          videoRef.current.addEventListener('loadedmetadata', function(e){
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
          });
        })
        .catch((err) => {
          window.alert(err.name + ': ' + err.message);
        });
    } catch {
    }

    return () => {
      videoStream.getVideoTracks().forEach((track) => {
        track.stop();
      });
    }
  });

  const handleReleaseShutter = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0);
    const base64 = canvasRef.current.toDataURL('');
    // props.onReleaseShutter();
  }

  return (
    <StyledWindow>
      <NavBar
        title="写真"
        leftSide={(
          <TextButton onClick={props.onClickCancel}>キャンセル</TextButton>
        )}
      />
      <PreviewSpace>
        <CameraPreview
          ref={videoRef}
          autoPlay
          playsInline
        />
        <CanvasPreview
          ref={canvasRef}
        />
      </PreviewSpace>
      <BottomSpace>
        <ShutterButton
          onClick={handleReleaseShutter}
        />
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

const PreviewSpace = styled(View)`
  background: #000;
  width: 100%;
  position: relative;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    padding-top: 100%;
  }
`;

const CameraPreview = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
`;

const CanvasPreview = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  object-fit: cover;
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

export default CameraView;
