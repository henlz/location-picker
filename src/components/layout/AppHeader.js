import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background: #0b76c5;
  margin-bottom: 28px;
  width: 100%;
  height: auto;
  min-height: 50px;
  -moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #eee \\9;
  position: relative;
  z-index: 1001;
  min-width: 190px;
`;

const Content = styled.div`
  height: auto;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

const AppLogo = styled.div`
  background: 
    url(https://cdn.rcstatic.com/images/site_graphics/newsite/mobile/logos/rc-logo-small--white.svg) left center no-repeat;
  width: 150px!important;
  height: 50px;
  background-size: 100%;
`;

const AppHeader = () => {
  return (
    <Header>
      <Content>
        <AppLogo/>
      </Content>
    </Header>
  );
};

export default AppHeader;
