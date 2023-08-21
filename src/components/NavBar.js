import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
            <NavLink to="/">
    <Navbar.Brand>
    <img src={logo} alt="logo" height="45" />
    </Navbar.Brand>
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto text-left">
        <NavLink to="/" exact className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-home'></i>Home</NavLink>
        <NavLink to="signin" className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-sign-in-alt'></i>Sign In</NavLink>
        <NavLink to="signup" className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-user-plus'></i>Sign Up</NavLink>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default NavBar;