/*
Code original to janusgraph-app is covered by top-level LICENSE (MIT).
 */

'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Navbar = require('react-bootstrap/Navbar').default;
const Nav = require('react-bootstrap/Nav').default;
const NavDropdown = require('react-bootstrap/NavDropdown').default;

class Bar extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>JanusGraph App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/jaredbwasserman/janusgraph-app/blob/main/licenses/jsonexporter-plugin/LICENSE" target="_blank">Gephi JSON Exporter Code License</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

module.exports = Bar
