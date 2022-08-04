import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from '../../imgs/logo.png';
import '../../styles/nav.css';
import '../../styles/general.css';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector('.nav');
      if (!nav) {
        return;
      }

      if (window.pageYOffset > 0) {
        nav.classList.add("add-shadow");
        nav.classList.add("add-color");
      } else {
        nav.classList.remove("add-shadow");
        nav.classList.remove("add-color");
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div>
      <Navbar className="nav" scrolling light expand="md" fixed="top">
        <div className="container">
          <NavbarBrand className="logoSizenav">
            <Link to='/'>
              <img className="logoSize" src={Logo} alt="logo" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/quotes'>
                  <NavLink style={{ color: 'white', textDecoration: 'none' }}>Quotes</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/characters'>
                  <NavLink style={{ color: 'white', textDecoration: 'none' }}>Characters</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/houses'>
                  <NavLink style={{ color: 'white', textDecoration: 'none' }}>Houses</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/spells'>
                  <NavLink style={{ color: 'white', textDecoration: 'none' }}>Spells</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/sortinghat'>
                  <NavLink style={{ color: 'white', textDecoration: 'none' }}>Sorting Hat</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Example;