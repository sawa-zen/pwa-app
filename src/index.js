import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import * as viewportUnitsBuggyfill from 'viewport-units-buggyfill';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faWallet, faQrcode, faUser } from '@fortawesome/free-solid-svg-icons'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router/Router';
import { View } from './components';

library.add(faHome, faBell, faWallet, faQrcode, faUser);

if(!window.matchMedia('(display-mode: standalone)').matches){
  viewportUnitsBuggyfill.init();

  // 最初に、ビューポートの高さを取得し、0.01を掛けて1%の値を算出して、vh単位の値を取得
  let vh = window.innerHeight * 0.01;
  // カスタム変数--vhの値をドキュメントのルートに設定
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const target = document.getElementById('root');

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>,
  target,
);
