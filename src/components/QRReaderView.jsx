import React from 'react';
import styled from 'styled-components';
import jsQR from "jsqr";
import View from './View';

class QRReaderView extends React.Component {
  _intervalID = null;
  _wrapperRef = React.createRef();
  _videoRef = React.createRef();
  _canvas = document.createElement('canvas');
  _videoStream = null;
  _settings = {
    audio: false,
    video: {
      facingMode: 'environment',
      maxFrameRate: 30,
      // width: {
      //   exact: 720
      // },
      // height: {
      //   exact: 720
      // },
    }
  }

  componentDidMount() {
    //  カメラの映像を取得
    navigator.mediaDevices.getUserMedia(this._settings)
      .then((stream) => {
        this._videoStream = stream;
        this._videoRef.current.srcObject = stream;
        this._start();
      })

    this._intervalID = setInterval(this._readQR, 1000);
  }

  componentWillUnmount() {
    if (!this._videoStream) { return; }
    this._videoStream.getVideoTracks().forEach((track) => {
      track.stop();
    });
  }

  _start = () => {
    this._videoRef.current.play();
  }

  _readQR = () => {
    const imageData = this._getImageData();
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      alert(code.data);
    }
  }

  _getImageData = () => {
    let sx = 0, sy = 0, sw = 0, sh = 0;
    const video = this._videoRef.current;
    sy = (video.videoHeight - video.videoWidth) / 2;
    sw = sh = video.videoWidth;

    const ctx = this._canvas.getContext('2d');
    ctx.drawImage(this._videoRef.current, sx, sy, sw, sh, 0, 0, sw, sh);
    return ctx.getImageData(0, 0, sw, sh);
  }

  _onLoadedMetadata = () => {
    this._canvas.width = this._videoRef.current.videoWidth;
    this._canvas.height = this._videoRef.current.videoWidth;
  }

  render() {
    return (
      <Wrapper ref={this._wrapperRef}>
        <QRReaderPreview
          ref={this._videoRef}
          onLoadedMetadata={this._onLoadedMetadata}
          playsInline
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled(View)`
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

const QRReaderPreview = styled.video`
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

export default QRReaderView;
