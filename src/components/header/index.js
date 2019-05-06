import React from 'react';

import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';

import { Link, BrowserRouter } from 'react-router-dom';

import "../../styles/header.scss";

const Header = () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <BrowserRouter>
          <Link to="/">
          <img src={LogoImage} />
          </Link>
        </BrowserRouter>
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
