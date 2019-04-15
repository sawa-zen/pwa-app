import React from 'react';
import styled from 'styled-components';
import View from './View';

class CameraView extends React.Component {
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
      //   exact: 1080
      // },
      // height: {
      //   exact: 1080
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
  }

  componentWillUpdate(props) {
    switch (props.mode) {
      case 'camera': this._start(); break;
      case 'confirm': this._stop(); break;
    }
  }

  componentWillMount() {
    if (!this._videoStream) { return; }
    this._videoStream.getVideoTracks().forEach((track) => {
      track.stop();
    });
  }

  _start = () => {
    this._videoRef.current.play();
  }

  _stop = () => {
    this._videoRef.current.pause();
    this.props.onChange(this._getBase64());
  }

  _getBase64 = () => {
    let sx = 0, sy = 0, sw = 0, sh = 0;
    const video = this._videoRef.current;
    sy = (video.videoHeight - video.videoWidth) / 2;
    sw = sh = video.videoWidth;

    const ctx = this._canvas.getContext('2d');
    ctx.drawImage(this._videoRef.current, sx, sy, sw, sh, 0, 0, sw, sh);
    return this._canvas.toDataURL('');
  }

  _onLoadedMetadata = () => {
    this._canvas.width = this._videoRef.current.videoWidth;
    this._canvas.height = this._videoRef.current.videoWidth;
  }

  render() {
    return (
      <Wrapper ref={this._wrapperRef}>
        <CameraPreview
          ref={this._videoRef}
          onLoadedMetadata={this._onLoadedMetadata}
          playsInline
        />
        {
          this.props.mode === 'camera' && <CardFrame />
        }
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

const CardFrame = styled(View)`
  position: absolute;
  width: 90%;
  height: 56%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border: 2px solid #FFF;
  border-radius: 20px;
`;

export default CameraView;
