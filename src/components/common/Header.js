import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">
                  Backyard Beek
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <IndexLinkContainer to="/">
                    <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/beehives">
                    <NavItem eventKey={2}>Hives</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={2}>About</NavItem>
                </LinkContainer>

                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">Sign up</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

const Header = () => {

    return(

    navbarInstance

/*          <ul className="nav navbar-nav">
        <li className="nav-item active">
        <IndexLink to="/" activeClassName="active">Home </IndexLink>
        </li>
        <li className="nav-item">
        <Link to="/beehives" activeClassName="active">Yard</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" activeClassName="active">About

        </Link>
        </li>*/





    );
};



export default Header;
