import React, { useState } from 'react';
import styled from 'styled-components';
import { NavigationView, Button, QRReaderWindow } from '../../../components';

const WalletNavigation = () => {
  const [
    showQRReader,
    setShowQRReader,
  ] = useState(false);
  return (
    <NavigationView title='おサイフ'>
      <QRButton
        label="QRを読み込む"
        icon="qrcode"
        onClick={() => setShowQRReader(true)}
      />
      {
        showQRReader && (
          <QRReaderWindow
            onClickCancel={() => setShowQRReader(false)}
          />
        )
      }
    </NavigationView>
  );
}

const QRButton = styled(Button)`
  margin: 48px;
`;

export default WalletNavigation;
