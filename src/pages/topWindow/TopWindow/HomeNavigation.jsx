import React, { useState } from 'react';
import styled from 'styled-components';
import {
  NavigationView,
  Button,
  CameraWindow,
} from '../../../components';

const HomeNavigation = (props) => {
  const [
    showCamera,
    setShowCamera,
  ] = useState(false);

  const [
    currentImage,
    setImage,
  ] = useState('');

  const handleSelectImage = (base64) => {
    setImage(base64);
    setShowCamera(false);
  }

  return (
    <NavigationView title='ホーム'>
      <PreviewImage src={currentImage} alt=""/>
      <CameraButton
        icon="camera"
        label="写真を撮る"
        onClick={() => setShowCamera(true)}
      />
      {
        showCamera && (
          <CameraWindow
            onClickCancel={() => setShowCamera(false)}
            onSelect={handleSelectImage}
          />
        )
      }
    </NavigationView>
  );
}

const PreviewImage = styled.img`
  width: 100%;
  height: auto;
`;

const CameraButton = styled(Button)`
`;

export default HomeNavigation;
