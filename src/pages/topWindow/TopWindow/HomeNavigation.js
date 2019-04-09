import React, { useState } from 'react';
import styled from 'styled-components';
import {
  NavigationView,
  Button,
  CameraView,
} from '../../../components';

const HomeNavigation = (props) => {
  const [
    showCamera,
    setShowCamera,
  ] = useState(false);

  return (
    <NavigationView title='ホーム'>
      <CameraButton
        icon="camera"
        label="写真を撮る"
        onClick={() => setShowCamera(true)}
      />
      {
        showCamera && (
          <CameraView
            onClickCancel={() => setShowCamera(false)}
            onReleaseShutter={() => setShowCamera(false)}
          />
        )
      }
    </NavigationView>
  );
}

const CameraButton = styled(Button)`
`;

export default HomeNavigation;
