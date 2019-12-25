import React from 'react';
import './App.css';

import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar color="faded" light expand="md">

          <NavbarBrand href="/">
            React Bootstrap Example
          </NavbarBrand>
          <Nav className="ml-auto" navbar>

            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="https://www.techiediaries.com/react-bootstrap">
                Tutorial
              </NavLink>
            </NavItem>


          </Nav>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
