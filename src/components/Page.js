import React from 'react';
import styled from 'styled-components';
import View from './View';

class Page extends React.Component {
  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  render() {
    return (
      <Wrapper
        className={this.props.className}
        ref={this.wrapperRef}
      >
        {
          this.props.navBar && (
            <NavBarSpace>
              {this.props.navBar}
            </NavBarSpace>
          )
        }
        <ContentSpace>
          {this.props.children}
        </ContentSpace>
        {
          this.props.tabBar && (
            <TabBarSpace>
              {this.props.tabBar}
            </TabBarSpace>
          )
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled(View)`
  background: #FFF;
  position: relative;
  min-height: 100vh;
`;

const NavBarSpace = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const ContentSpace = styled(View)`
  flex: auto;
  align-items: center;
  justify-content: center;
  padding-top: 44px;
  padding-top: calc(44px + constant(safe-area-inset-top));
  padding-top: calc(44px + env(safe-area-inset-top));
  padding-bottom: 49px;
  padding-bottom: calc(49px + constant(safe-area-inset-bottom));
  padding-bottom: calc(49px + env(safe-area-inset-bottom));
`;

const TabBarSpace = styled(View)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Page;
